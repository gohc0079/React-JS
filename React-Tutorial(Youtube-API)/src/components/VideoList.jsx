import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //<- destructuring props
  const results = videos.map(video => {
    return (
      <React.Fragment>
        <VideoItem
          onVideoSelect={onVideoSelect}
          video={video}
          key={video.id.videoId}
        />
        <hr />
      </React.Fragment>
    );
  });

  return <div className="ui relaxed divided list">{results}</div>;
};

export default VideoList;
