"use client";

import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const VideoPlayer = ({ trigger, src }) => {
  return (
    <>
      <Popup
        trigger={trigger}
        position=""
        modal={true}
        contentStyle={{ width: "80%", maxWidth: 1920 }}
        lockScroll
      >
        <video
          src={src ?? "/home_1/video.mp4"}
          width="100%"
          height="400px"
          style={{ display: "block", position: "relative" }}
          controls
        />
      </Popup>
    </>
  );
};
