import React, { useMemo, useState } from "react";
import { CalculatorOutlined } from "@ant-design/icons";

const paintCoverage = {
  emulsion: 10,
  satin: 11,
  silk: 12,
  exterior: 9,
  primer: 8,
};

export default function PaintCalculator() {
  const [length, setLength] = useState<number | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");

  const [doors, setDoors] = useState(1);
  const [windows, setWindows] = useState(2);

  const [includeCeiling, setIncludeCeiling] = useState(true);

  const [coats, setCoats] = useState(2);

  const [paintType, setPaintType] =
    useState<keyof typeof paintCoverage>("emulsion");

  const [bucketSize, setBucketSize] = useState(20);

  const result = useMemo(() => {
    if (!length || !width || !height) return null;

    // Four walls
    const wallArea = 2 * (length + width) * height;

    // Ceiling
    const ceilingArea = includeCeiling ? length * width : 0;

    // Standard estimates
    const doorArea = doors * 2;
    const windowArea = windows * 1.5;

    const paintableArea =
      wallArea + ceilingArea - doorArea - windowArea;

    const totalArea = paintableArea * coats;

    const coverage = paintCoverage[paintType];

    const litres = totalArea / coverage;

    const buckets = Math.ceil(litres / bucketSize);

    return {
      wallArea,
      ceilingArea,
      paintableArea,
      totalArea,
      litres,
      buckets,
    };
  }, [
    length,
    width,
    height,
    includeCeiling,
    doors,
    windows,
    coats,
    paintType,
    bucketSize,
  ]);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-950 text-white px-5 py-2 rounded-full">
            <CalculatorOutlined />
            Paint Calculator
          </span>

          <h2 className="mt-6 text-5xl font-bold text-blue-950">
            Estimate Your Paint Requirement
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate approximately how much paint you'll need based on
            your room size and painting preferences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Calculator */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="font-medium block mb-2">
                  Room Length (m)
                </label>

                <input
                  type="number"
                  value={length}
                  onChange={(e) =>
                    setLength(
                      e.target.value === ""
                        ? ""
                        : Number(e.target.value)
                    )
                  }
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Room Width (m)
                </label>

                <input
                  type="number"
                  value={width}
                  onChange={(e) =>
                    setWidth(
                      e.target.value === ""
                        ? ""
                        : Number(e.target.value)
                    )
                  }
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Wall Height (m)
                </label>

                <input
                  type="number"
                  value={height}
                  onChange={(e) =>
                    setHeight(
                      e.target.value === ""
                        ? ""
                        : Number(e.target.value)
                    )
                  }
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Number of Coats
                </label>

                <select
                  value={coats}
                  onChange={(e) =>
                    setCoats(Number(e.target.value))
                  }
                  className="w-full border rounded-xl px-4 py-3"
                >
                  <option value={1}>1 Coat</option>
                  <option value={2}>2 Coats</option>
                  <option value={3}>3 Coats</option>
                </select>
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Paint Type
                </label>

                <select
                  value={paintType}
                  onChange={(e) =>
                    setPaintType(
                      e.target.value as keyof typeof paintCoverage
                    )
                  }
                  className="w-full border rounded-xl px-4 py-3"
                >
                  <option value="emulsion">
                    Matt Emulsion
                  </option>

                  <option value="satin">
                    Satin
                  </option>

                  <option value="silk">
                    Silk / Vinyl
                  </option>

                  <option value="exterior">
                    Exterior Paint
                  </option>

                  <option value="primer">
                    Primer
                  </option>
                </select>
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Bucket Size
                </label>

                <select
                  value={bucketSize}
                  onChange={(e) =>
                    setBucketSize(Number(e.target.value))
                  }
                  className="w-full border rounded-xl px-4 py-3"
                >
                  <option value={4}>4 Litres</option>
                  <option value={10}>10 Litres</option>
                  <option value={20}>20 Litres</option>
                </select>
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Doors
                </label>

                <input
                  type="number"
                  min={0}
                  value={doors}
                  onChange={(e) =>
                    setDoors(Number(e.target.value))
                  }
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Windows
                </label>

                <input
                  type="number"
                  min={0}
                  value={windows}
                  onChange={(e) =>
                    setWindows(Number(e.target.value))
                  }
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

            </div>

            <label className="flex items-center gap-3 mt-6">
              <input
                type="checkbox"
                checked={includeCeiling}
                onChange={() =>
                  setIncludeCeiling(!includeCeiling)
                }
              />

              Include Ceiling
            </label>

          </div>

          {/* Results */}

          <div className="bg-blue-950 rounded-3xl text-white p-10">

            <h3 className="text-3xl font-bold mb-10">
              Estimated Results
            </h3>

            {result ? (
              <div className="space-y-5">

                <ResultRow
                  title="Wall Area"
                  value={`${result.wallArea.toFixed(1)} m²`}
                />

                <ResultRow
                  title="Ceiling Area"
                  value={`${result.ceilingArea.toFixed(1)} m²`}
                />

                <ResultRow
                  title="Paintable Area"
                  value={`${result.paintableArea.toFixed(1)} m²`}
                />

                <ResultRow
                  title="Total Area"
                  value={`${result.totalArea.toFixed(1)} m²`}
                />

                <ResultRow
                  title="Paint Required"
                  value={`${result.litres.toFixed(1)} Litres`}
                />

                <div className="mt-10 bg-amber-400 rounded-2xl p-8 text-center text-blue-950">

                  <h4 className="text-xl font-semibold">
                    Estimated Buckets
                  </h4>

                  <div className="text-7xl font-black mt-3">
                    {result.buckets}
                  </div>

                  <p className="mt-2">
                    {bucketSize} Litre Bucket
                    {result.buckets > 1 ? "s" : ""}
                  </p>

                </div>

                <p className="text-blue-200 text-sm leading-7">
                  *This calculator provides an estimate only.
                  Coverage depends on wall condition, surface
                  porosity, application method, product type,
                  wastage, and colour changes. We recommend
                  purchasing approximately 5–10% extra paint to
                  account for touch-ups and unforeseen usage.
                </p>

              </div>
            ) : (
              <p className="text-blue-100">
                Enter your room dimensions to begin the calculation.
              </p>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

function ResultRow({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-blue-800 pb-3">
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}