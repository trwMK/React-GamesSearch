import React from "react";

export default function VideoPlayer({ videoLink }) {
  return (
    <div>
      <h1>Video Player</h1>
      <video controls width="640" height="360">
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
