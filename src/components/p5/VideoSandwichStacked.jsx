import dynamic from "next/dynamic";
import { useState } from "react";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function VideoSandwhichStacked({ children, stackedVideoPath }) {
  let stackedVideo;
  let [enableVideo, setEnableVideo] = useState(false);

  let setupBackground = (p5, parentRef) => {
    console.log("setup run");

    let cnv = p5.createCanvas(1280, 720).parent(parentRef);
    stackedVideo = p5.createVideo(stackedVideoPath);
    stackedVideo.volume(0);
    stackedVideo.hide();
    stackedVideo.loop();

    cnv.drop(() => p5.print("hola"));
  };

  let drawBackGround = (p5) => {
    p5.noStroke();
    p5.image(stackedVideo, 0, 0, 1280, 720, 0, 0, 1280, 720);
  };

  //foreground maskedVideo stuff
  // making another component means we are out of sync :(
  let maskShader;
  let preload = (p5) => {
    maskShader = p5.loadShader(
      "shaders/maskShader.vert",
      "shaders/maskShader.frag"
    );
  };

  let setupForeground = (p5, parentRef) => {
    let cnv = p5.createCanvas(1280, 720, p5.WEBGL).parent(parentRef);

    // load and set the shader
    p5.shader(maskShader);
    maskShader.setUniform("video", stackedVideo);

    cnv.drop(() => console.log("hola"));
  };

  let drawForeground = (p5) => {
    p5.noStroke();
    p5.rect(-p5.width / 2, -p5.height / 2, p5.width, p5.height);
  };

  return (
    <>
      <div className="m-20 flex justify-center">
        {/*background video. this video is rendered as is, untouched*/}
        <div className="-z-10 absolute mx-auto pointer-events-none">
          <Sketch setup={setupBackground} draw={drawBackGround} />
        </div>

        {/*children of the component that lie in between the two sketches*/}
        <div className="z-0 absolute">{children}</div>

        {/*foreground video. this video is masked from the runway mask*/}
        <div className="z-50 absolute pointer-events-none mx-auto">
          <Sketch
            preload={preload}
            setup={setupForeground}
            draw={drawForeground}
          />
        </div>
      </div>
    </>
  );
}
