import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    BgColorsOutlined,
    DeleteOutlined,
    ReloadOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import {
    Alert,
    Button,
    Card,
    Col,
    Divider,
    message,
    Row,
    Slider,
    Space,
    Spin,
    Tag,
    Typography,
    Upload,
} from "antd";
import type { UploadProps } from "antd";

type PaintColour = { name: string; code: string; hex: string };

const colourFamilies: Array<{ title: string; colours: PaintColour[] }> = [
    {
        title: "Neutrals", colours: [
            { name: "Pure White", code: "GP-001", hex: "#FFFFFF" }, { name: "Ivory Cream", code: "GP-002", hex: "#F7F1E5" },
            { name: "Warm Beige", code: "GP-003", hex: "#D8C3A5" }, { name: "Stone Grey", code: "GP-004", hex: "#B0B7C3" }, { name: "Charcoal", code: "GP-005", hex: "#3F4A59" },
        ]
    },
    {
        title: "Blues", colours: [
            { name: "Ocean Blue", code: "GP-101", hex: "#2563EB" }, { name: "Sky Blue", code: "GP-102", hex: "#60A5FA" },
            { name: "Royal Blue", code: "GP-103", hex: "#1D4ED8" }, { name: "Navy Blue", code: "GP-104", hex: "#172554" }, { name: "Powder Blue", code: "GP-105", hex: "#BFDBFE" },
        ]
    },
    {
        title: "Greens", colours: [
            { name: "Forest Green", code: "GP-201", hex: "#166534" }, { name: "Olive Green", code: "GP-202", hex: "#4D7C0F" },
            { name: "Mint Green", code: "GP-203", hex: "#BBF7D0" }, { name: "Emerald", code: "GP-204", hex: "#10B981" }, { name: "Lime Green", code: "GP-205", hex: "#84CC16" },
        ]
    },
    {
        title: "Yellows & Gold", colours: [
            { name: "Sunflower", code: "GP-301", hex: "#FACC15" }, { name: "Golden Sand", code: "GP-302", hex: "#EAB308" },
            { name: "Mustard", code: "GP-303", hex: "#CA8A04" }, { name: "Soft Yellow", code: "GP-304", hex: "#FEF08A" }, { name: "Amber", code: "GP-305", hex: "#F59E0B" },
        ]
    },
    {
        title: "Reds", colours: [
            { name: "Ruby Red", code: "GP-401", hex: "#DC2626" }, { name: "Terracotta", code: "GP-402", hex: "#B45309" },
            { name: "Brick Red", code: "GP-403", hex: "#991B1B" }, { name: "Rose", code: "GP-404", hex: "#FB7185" }, { name: "Wine Red", code: "GP-405", hex: "#881337" },
        ]
    },
];

const hexToRgb = (hex: string) => {
    const value = Number.parseInt(hex.slice(1), 16);
    return [(value >> 16) & 255, (value >> 8) & 255, value & 255] as const;
};

const rgbToHsl = (red: number, green: number, blue: number) => {
    const r = red / 255; const g = green / 255; const b = blue / 255;
    const max = Math.max(r, g, b); const min = Math.min(r, g, b); const lightness = (max + min) / 2;
    if (max === min) return [0, 0, lightness] as const;
    const delta = max - min;
    const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    let hue = max === r ? (g - b) / delta + (g < b ? 6 : 0) : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;
    hue /= 6;
    return [hue, saturation, lightness] as const;
};

const hslToRgb = (hue: number, saturation: number, lightness: number) => {
    if (saturation === 0) { const value = Math.round(lightness * 255); return [value, value, value] as const; }
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    const channel = (offset: number) => {
        let t = hue + offset;
        if (t < 0) t += 1; if (t > 1) t -= 1;
        return Math.round(255 * (t < 1 / 6 ? p + (q - p) * 6 * t : t < 1 / 2 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p));
    };
    return [channel(1 / 3), channel(0), channel(-1 / 3)] as const;
};

function getRegionMask(data: Uint8ClampedArray, width: number, height: number, startX: number, startY: number, tolerance: number) {
    const start = startY * width + startX;
    const origin = start * 4;
    const toleranceSquared = tolerance * tolerance * 3;
    const visited = new Uint8Array(width * height);
    const mask = new Uint8Array(width * height);
    const stack = [start];
    visited[start] = 1;

    while (stack.length) {
        const pixel = stack.pop() as number;
        mask[pixel] = 1;
        const x = pixel % width; const y = Math.floor(pixel / width);
        const neighbours = [x > 0 ? pixel - 1 : -1, x < width - 1 ? pixel + 1 : -1, y > 0 ? pixel - width : -1, y < height - 1 ? pixel + width : -1];
        neighbours.forEach((next) => {
            if (next < 0 || visited[next]) return;
            visited[next] = 1;
            const index = next * 4;
            const difference = (data[index] - data[origin]) ** 2 + (data[index + 1] - data[origin + 1]) ** 2 + (data[index + 2] - data[origin + 2]) ** 2;
            if (difference <= toleranceSquared) stack.push(next);
        });
    }
    return mask;
}

export default function PhotoVisualizer() {
    const [selectedColour, setSelectedColour] = useState<PaintColour>(colourFamilies[1].colours[3]);
    const [hasImage, setHasImage] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [tolerance, setTolerance] = useState(35);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const originalDataRef = useRef<Uint8ClampedArray | null>(null);
    const workingDataRef = useRef<Uint8ClampedArray | null>(null);
    const dimensionsRef = useRef({ width: 0, height: 0 });

    const renderWorkingImage = useCallback(() => {
        const canvas = canvasRef.current; const pixels = workingDataRef.current;
        if (!canvas || !pixels) return;
        const { width, height } = dimensionsRef.current;
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d")?.putImageData(new ImageData(new Uint8ClampedArray(pixels), width, height), 0, 0);
    }, []);

    useEffect(() => {
        if (hasImage) renderWorkingImage();
    }, [hasImage, renderWorkingImage]);

    const loadImage = useCallback((file: File) => {
        if (!file.type.startsWith("image/")) { message.error("Please choose a JPG, PNG, or other image file."); return; }
        const image = new Image();
        const objectUrl = URL.createObjectURL(file);
        image.onload = () => {
            const scale = Math.min(1, 900 / image.width, 700 / image.height);
            const width = Math.max(1, Math.round(image.width * scale)); const height = Math.max(1, Math.round(image.height * scale));
            // The preview canvas is conditional, so it does not exist until
            // setHasImage(true) renders it. Read the file with an off-screen canvas first.
            const canvas = document.createElement("canvas");
            canvas.width = width; canvas.height = height;
            const context = canvas.getContext("2d");
            if (!context) return;
            context.drawImage(image, 0, 0, width, height);
            const imageData = context.getImageData(0, 0, width, height).data;
            originalDataRef.current = new Uint8ClampedArray(imageData);
            workingDataRef.current = new Uint8ClampedArray(imageData);
            dimensionsRef.current = { width, height };

            setHasImage(true); URL.revokeObjectURL(objectUrl);
        };
        image.onerror = () => { URL.revokeObjectURL(objectUrl); message.error("That image could not be opened."); };
        image.src = objectUrl;
    }, []);

    const uploadProps: UploadProps = { accept: "image/*", maxCount: 1, showUploadList: false, beforeUpload: (file) => { loadImage(file); return false; } };

    const paintRegion = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const source = originalDataRef.current; const working = workingDataRef.current; const canvas = canvasRef.current;
        if (!source || !working || !canvas || isProcessing) return;
        const { width, height } = dimensionsRef.current; const bounds = canvas.getBoundingClientRect();
        const x = Math.min(width - 1, Math.max(0, Math.floor((event.clientX - bounds.left) * width / bounds.width)));
        const y = Math.min(height - 1, Math.max(0, Math.floor((event.clientY - bounds.top) * height / bounds.height)));
        setIsProcessing(true);
        window.setTimeout(() => {
            const mask = getRegionMask(source, width, height, x, y, tolerance);
            const [targetRed, targetGreen, targetBlue] = hexToRgb(selectedColour.hex);
            const [hue, saturation] = rgbToHsl(targetRed, targetGreen, targetBlue);
            mask.forEach((selected, pixel) => {
                if (!selected) return;
                const index = pixel * 4; const [, , lightness] = rgbToHsl(source[index], source[index + 1], source[index + 2]);
                const [red, green, blue] = hslToRgb(hue, saturation, lightness);
                working[index] = red; working[index + 1] = green; working[index + 2] = blue;
            });
            renderWorkingImage(); setIsProcessing(false);
        }, 0);
    };

    const resetImage = () => { if (originalDataRef.current) { workingDataRef.current = new Uint8ClampedArray(originalDataRef.current); renderWorkingImage(); } };
    const removeImage = () => { originalDataRef.current = null; workingDataRef.current = null; setHasImage(false); };

    return <section style={{ background: "#f6f8fc", minHeight: "100vh", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
                <Tag color="blue" icon={<BgColorsOutlined />}>PHOTO VISUALISER</Tag>
                <Typography.Title level={1} style={{ color: "#172554", margin: "16px 0 8px" }}>See your colour on the wall</Typography.Title>
                <Typography.Paragraph type="secondary" style={{ fontSize: 16, maxWidth: 650, margin: "auto" }}>Upload a photo, select a paint colour, then click a wall to preview it while preserving its shadows and texture.</Typography.Paragraph>
            </div>
            <Row gutter={[24, 24]} align="top">
                <Col xs={24} lg={8}>
                    <Card title="Choose a paint colour" bordered={false}>
                        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                            {colourFamilies.map((family) => <div key={family.title}>
                                <Typography.Text strong>{family.title}</Typography.Text>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                                    {family.colours.map((colour) => <Button key={colour.code} aria-label={`${colour.name}, ${colour.code}`} title={`${colour.name} · ${colour.code}`} onClick={() => setSelectedColour(colour)} style={{ width: 38, height: 38, background: colour.hex, border: selectedColour.code === colour.code ? "3px solid #172554" : "1px solid #d9d9d9", boxShadow: selectedColour.code === colour.code ? "0 0 0 2px #91caff" : undefined }} />)}
                                </div>
                            </div>)}
                            <Divider style={{ margin: "4px 0" }} />
                            <Space><span style={{ width: 42, height: 42, borderRadius: "50%", background: selectedColour.hex, border: "1px solid #d9d9d9" }} /><div><Typography.Text strong>{selectedColour.name}</Typography.Text><br /><Typography.Text type="secondary">{selectedColour.code} · {selectedColour.hex}</Typography.Text></div></Space>
                        </Space>
                    </Card>
                </Col>
                <Col xs={24} lg={16}>
                    <Card bordered={false} bodyStyle={{ padding: hasImage ? 16 : 24 }}>
                        {!hasImage ? <Upload.Dragger {...uploadProps} style={{ padding: "52px 12px" }}>
                            <p className="ant-upload-drag-icon"><UploadOutlined /></p><Typography.Title level={4}>Drop a room photo here</Typography.Title><Typography.Paragraph type="secondary">or click to browse. Your image stays in this browser.</Typography.Paragraph><Button type="primary" icon={<UploadOutlined />}>Choose photo</Button>
                        </Upload.Dragger> : <>
                            <div style={{ position: "relative", textAlign: "center", background: "#fafafa", borderRadius: 8, overflow: "hidden" }}>
                                <canvas ref={canvasRef} onClick={paintRegion} style={{ display: "block", maxWidth: "100%", height: "auto", margin: "0 auto", cursor: isProcessing ? "wait" : "crosshair" }} />
                                {isProcessing && <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(255,255,255,.55)" }}><Spin tip="Applying paint…" size="large" /></div>}
                            </div>
                            <Row gutter={[16, 16]} align="middle" style={{ marginTop: 16 }}><Col flex="auto"><Typography.Text strong>Paint precision</Typography.Text><Slider min={10} max={80} value={tolerance} onChange={setTolerance} tooltip={{ formatter: (value) => `${value ?? tolerance}` }} /></Col><Col><Space wrap><Button icon={<ReloadOutlined />} onClick={resetImage}>Reset</Button><Upload {...uploadProps}><Button icon={<UploadOutlined />}>New photo</Button></Upload><Button danger icon={<DeleteOutlined />} onClick={removeImage}>Remove</Button></Space></Col></Row>
                            <Alert style={{ marginTop: 12 }} type="info" showIcon message={`Click a wall to apply ${selectedColour.name}.`} description="Lower precision if the whole wall is not selected; raise it if paint reaches nearby trim or furniture." />
                        </>}
                    </Card>
                </Col>
            </Row>
        </div>
    </section>;
}
