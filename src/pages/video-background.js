import MaskedVideoSketch from "@/components/p5/MaskedVideoSketch";
import VideoSketch from "@/components/p5/VideoSketch";
import Draggable from "react-draggable";

export default function VideoBackground() {
  return (
    <>
      <div className="text-center text-5xl mt-10 font-serif font-bold text-blue-800">
        Video Composition
      </div>

      {/* <VideoSketch /> */}

      <MaskedVideoSketch />
      <div className="absolute right-[700px] text-blue-700 mix-blend-multiply outline-1 bottom-[550px] font-bold font-serif -z-10 text-[15rem]">
        2023
      </div>
    </>
  );
}
