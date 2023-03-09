import VideoSandwhichStacked from "@/components/p5/VideoSandwichStacked";

export default function VideoBackground() {
  return (
    <>
      <div className="text-center text-5xl mt-10 font-serif font-bold text-blue-800">
        Video Composition
      </div>

      <VideoSandwhichStacked stackedVideo={"videos/mega-josh.webm"}>
        <div className="text-9xl text-blue-800 text-center font-bold font-serif">
          2023
        </div>
      </VideoSandwhichStacked>
    </>
  );
}
