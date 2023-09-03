import React from "react";
import ReactPlayer from "react-player";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh", // Optional: This centers content vertically in the viewport
};

const Video = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <div style={containerStyle}>
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=cVA-9JHwbFY"
          playing={true}
          volume={0.15}
          controls={true}
        />
      </div>
    </div>
  );
};

export default Video;
