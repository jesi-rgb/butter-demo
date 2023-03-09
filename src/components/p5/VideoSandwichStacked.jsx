import dynamic from "next/dynamic";

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
    p5.fill(200);
    p5.circle(125, 100 + p5.cos(p5.frameCount / 100) * 50, 50);
  };

  return (
    <>
      <div className="relative my-20 mx-auto">
        {
          <div className="-z-10 absolute border">
            <Sketch setup={setup} draw={drawBackGround} />
          </div>
        }

        <div className="z-0 absolute">{children}</div>

        {
          <div className="z-50 absolute border mix-blend-lighten">
            <Sketch setup={setup} draw={drawForeground} />
          </div>
        }
      </div>
    </>
  );
}
