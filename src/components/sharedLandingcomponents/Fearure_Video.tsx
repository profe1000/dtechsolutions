import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import "../sharedLandingcss/SharedComponent.css";

const FeatureVideo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const videoRef = useRef<any>(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (isModalVisible && videoRef.current) {
      // Autoplay the video when modal opens
      videoRef.current.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    } else if (videoRef.current) {
      // Stop the video when modal closes
      videoRef.current.contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        "*"
      );
    }
  }, [isModalVisible]);

  return (
    <>
      <div className="relative w-full h-72 md:h-96">
        <img
          src={`${process.env.PUBLIC_URL}/images/home/home-4-video-button-img.jpg`}
          alt="Feature Video Thumbnail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            type="primary"
            icon={
              <PlayCircleOutlined
                style={{ fontSize: "32px", color: "black" }}
              />
            }
            size="large"
            onClick={showModal}
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "white",
              borderColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </div>
      </div>
      <Modal
        title="Feature Video"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        width="80%"
      >
        <div>
          <iframe
            ref={videoRef}
            className="w-full h-full"
            style={{ height: "400px" }}
            src="https://www.youtube.com/embed/qN_69wnCbRU?enablejsapi=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Feature Video"
          />
        </div>
      </Modal>
    </>
  );
};

export default FeatureVideo;
