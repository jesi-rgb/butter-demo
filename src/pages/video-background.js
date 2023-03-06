import MaskedVideoSketch from "@/components/p5/MaskedVideoSketch";
import VideoSketch from "@/components/p5/VideoSketch";
import Draggable from "react-draggable";

export default function VideoBackground() {
  return (
    <>
      <div className="text-center text-5xl mt-10 font-serif font-bold text-blue-800">
        Video Composition
      </div>

      <VideoSketch />
      <MaskedVideoSketch />
    </>
  );
}
