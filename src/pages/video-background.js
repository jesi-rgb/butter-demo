import MaskedVideoSketch from "@/components/p5/MaskedVideoSketch";
import VideoSandwich from "@/components/p5/VideoSandwich";
import VideoSketch from "@/components/p5/VideoSketch";
import Draggable from "react-draggable";

export default function VideoBackground() {
  return (
    <>
      <div className="text-center text-5xl mt-10 font-serif font-bold text-blue-800">
        Video Composition
      </div>

      <VideoSandwich video={"videos/josh.mp4"} mask={"videos/josh-mask.mp4"}>
        2023
      </VideoSandwich>
    </>
  );
}
