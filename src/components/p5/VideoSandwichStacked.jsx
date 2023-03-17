import dynamic from "next/dynamic";
import { useState } from "react";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function VideoSandwhichStacked({ children, stackedVideoPath }) {
  let enableVideo = false;
  let stackedVideo;

  let setupBackground = (p5, parentRef) => {
    p5.createCanvas(1280, 720).parent(parentRef);

    stackedVideo = p5.createVideo(stackedVideoPath);
    stackedVideo.volume(0);
    stackedVideo.hide();
    stackedVideo.loop();
  };

  let drawBackGround = (p5) => {
    if (enableVideo) {
      p5.noStroke();
      p5.image(stackedVideo, 0, 0, 1280, 720, 0, 0, 1280, 720);
    }
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

  let cnv;
  let setupForeground = (p5, parentRef) => {
    cnv = p5.createCanvas(1280, 720, p5.WEBGL).parent(parentRef);

    let stackedVideoFg = p5.createVideo(stackedVideoPath);
    stackedVideoFg.volume(0);
    stackedVideoFg.hide();
    stackedVideoFg.loop();
    // load and set the shader
    p5.shader(maskShader);
    maskShader.setUniform("video", stackedVideoFg);

    cnv.drop(() => {
      enableVideo = true;
      cnv.attribute("pointer-events", "none");
    });
  };

  let drawForeground = (p5) => {
    if (enableVideo) {
      p5.noStroke();
      p5.rect(-p5.width / 2, -p5.height / 2, p5.width, p5.height);
    }
  };

  return (
    <>
      <div className="m-20 flex justify-center">
        {/*background video. this video is rendered as is, untouched*/}
        <div className="-z-10 absolute mx-auto">
          <Sketch setup={setupBackground} draw={drawBackGround} />
        </div>

        {/*children of the component that lie in between the two sketches*/}
        <div className="z-0 absolute">{children}</div>

        {/*foreground video. this video is masked from the runway mask*/}
        <div className="z-50 absolute mx-auto">
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
