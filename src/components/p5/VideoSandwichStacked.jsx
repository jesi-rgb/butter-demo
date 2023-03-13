import dynamic from "next/dynamic";
import MaskedVideoSketch from "./MaskedVideoSketch";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function VideoSandwhichStacked({ children, stackedVideoPath }) {
  let stackedVideo;

  console.log(stackedVideoPath);
  let setup = (p5, parentRef) => {
    p5.createCanvas(1280, 720).parent(parentRef);
    stackedVideo = p5.createVideo(stackedVideoPath);
    stackedVideo.volume(0);
    stackedVideo.hide();
    stackedVideo.loop();
  };

  let drawBackGround = (p5) => {
    p5.clear();
    p5.image(stackedVideo, 0, 0, 1280, 720, 0, 0, 1280, 720);
    p5.fill(127, 12, 129);
    p5.circle(100, 100 + p5.sin(p5.frameCount / 100) * 50, 50);
  };

  let drawForeground = (p5) => {
    p5.clear();
    p5.image(stackedVideo, 0, 0, 1280, 720, 0, 720, 1280, 720);
    p5.fill(127, 12, 129);
    p5.circle(100, 100 + p5.sin(p5.frameCount / 100) * 50, 50);
  };

  return (
    <div className="mx-auto relative">
      {
        // <div className="-z-10 absolute border mx-auto pointer-events-none">
        //   <Sketch setup={setup} draw={drawBackGround} />
        // </div>
      }

      <div className="z-0 absolute pointer-events-auto">{children}</div>

      {
        <div className="z-50 absolute pointer-events-none border mix-blend-lighten mx-auto">
          <Sketch setup={setup} draw={drawForeground} />
        </div>
      }
      {
        // <div className="absolute z-50">
        //   <MaskedVideoSketch
        //     video={"videos/josh.mp4"}
        //     mask={"videos/josh-mask.mp4"}
        //   />
        // </div>
      }
    </div>
  );
}
