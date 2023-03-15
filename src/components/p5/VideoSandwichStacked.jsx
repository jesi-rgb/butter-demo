import dynamic from "next/dynamic";
import { useState } from "react";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function VideoSandwhichStacked({ children, stackedVideoPath }) {
  let stackedVideo;
  let [enableVideo, setEnableVideo] = useState(false);

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
    p5.createCanvas(1280, 720, p5.WEBGL).parent(parentRef);

    // load and set the shader
    p5.shader(maskShader);
    maskShader.setUniform("video", stackedVideo);
  };

  let drawForeground = (p5) => {
    p5.noStroke();
    p5.rect(-p5.width / 2, -p5.height / 2, p5.width, p5.height);
  };

  return (
    <div
      className="mx-auto"
      onDrop={(e) => {
        e.preventDefault();
        setEnableVideo(true);
        console.log("drop the vid");
      }}
    >
      {/*background video. this video is rendered as is, untouched*/}
      <div
        className="-z-10 absolute border mx-auto pointer-events-none"
        style={{ opacity: enableVideo ? 1 : 0 }}
      >
        <Sketch setup={setup} draw={drawBackGround} />
      </div>

      {/*children of the component that lie in between the two sketches*/}
      <div className="z-0 absolute">{children}</div>

      {/*foreground video. this video is masked from the runway mask*/}
      <div
        className="z-50 absolute pointer-events-none border mx-auto"
        style={{ opacity: enableVideo ? 1 : 0 }}
      >
        <Sketch
          preload={preload}
          setup={setupForeground}
          draw={drawForeground}
        />
      </div>
    </div>
  );
}
