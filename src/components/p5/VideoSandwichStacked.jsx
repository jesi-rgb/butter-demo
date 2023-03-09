import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function VideoSandwhichStacked({ children, stackedVideoPath }) {
  let stackedVideo;

  let setup = (p5, parentRef) => {
    p5.createCanvas(1280, 720).parent(parentRef);
    stackedVideo = p5.createVideo(stackedVideoPath);
    stackedVideo.volume(0);
    stackedVideo.loop();
  };

  let drawBackGround = (p5) => {
    p5.image(stackedVideo, 0, 0, 1280, 720, 0, 0, 1280, 720);
  };

  let drawForeground = (p5) => {
    p5.image(stackedVideo, 0, 0, 1280, 720, 0, 720, 1280, 1440);
  };

  return (
    <>
      <div className="relative">
        <div className="-z-10 absolute border">
          <Sketch setup={setup} draw={drawBackGround} />
        </div>

        <div className="z-0 absolute">{children}</div>

        <div className="z-50 absolute border">
          <Sketch setup={setup} draw={drawForeground} />
        </div>
      </div>
    </>
  );
}
