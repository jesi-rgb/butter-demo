import Draggable3DText from "@/components/3D/Draggable3DText";
import VideoSandwhichStacked from "@/components/p5/VideoSandwichStacked";
import { useState } from "react";

export default function Demo() {
  let [enableVideo, setEnableVideo] = useState(false);
  return (
    <>
      <VideoSandwhichStacked
        enableVideo={enableVideo}
        stackedVideoPath={"/videos/mega-josh.mp4"}
      >
        <Draggable3DText fitScreen={true} bounds={null} />
      </VideoSandwhichStacked>
    </>
  );
}
