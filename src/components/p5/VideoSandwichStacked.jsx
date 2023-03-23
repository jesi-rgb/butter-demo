import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function VideoSandwhichStacked({ children, stackedVideoPath }) {
  let enableVideo = false;
  let stackedVideo;
  let isPaused = true;

  let setupBackground = (p5, parentRef) => {
    p5.disableFriendlyErrors = true;
    p5.createCanvas(1280, 720).parent(parentRef);

    stackedVideo = p5.createVideo(stackedVideoPath);
    stackedVideo.volume(0);
    stackedVideo.hide();
    stackedVideo.pause();

    p5.select("#drop-area").drop(() => {
      enableVideo = true;
      stackedVideo.volume(0.7);
      stackedVideo.loop();
    });
  };

  let drawBackGround = (p5) => {
    if (enableVideo) {
      p5.noStroke();
      p5.image(stackedVideo, 0, 0, 1280, 720, 0, 0, 1280, 720);
    }
  };

  let keyPressed = (p5, event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!enableVideo) return;
    if (event.code != "Space") return;

    isPaused = !isPaused;

    if (isPaused) {
      stackedVideo.pause();
    } else {
      stackedVideo.loop();
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

  let setupForeground = (p5, parentRef) => {
    p5.disableFriendlyErrors = true;
    p5.createCanvas(1280, 720, p5.WEBGL).parent(parentRef);

    // load and set the shader
    p5.shader(maskShader);
    maskShader.setUniform("video", stackedVideo);
  };

  let drawForeground = (p5) => {
    if (enableVideo) {
      p5.noStroke();
      p5.rect(-p5.width / 2, -p5.height / 2, p5.width, p5.height);
    }
  };

  function dragOver(e) {
    e.target.style = "background-color: #2C0046AA; transform:scale(1.15, 1.15)";
  }
  function dragLeave(e) {
    e.target.style = "background-color: #2C0046;";
  }

  return (
    <>
      <div className="text-7xl font-bold font-hero text-black mix-blend-overlay text-center mt-10">
        Video Layering
      </div>
      <div className="mx-20 mt-10 flex justify-center">
        {/*background video. this video is rendered as is, untouched*/}
        <div className="z-1 w-[1280px] h-[725px] bg-white absolute"></div>
        <div className="z-0 absolute border-4 border-purple-900 rounded-md">
          <Sketch setup={setupBackground} draw={drawBackGround} />
        </div>

        {/*children of the component that lie in between the two sketches*/}
        <div className="z-10 absolute">{children}</div>

        {/*foreground video. this video is masked from the runway mask*/}
        <div className="z-50 absolute pointer-events-none">
          <Sketch
            preload={preload}
            keyPressed={keyPressed}
            setup={setupForeground}
            draw={drawForeground}
          />
        </div>
      </div>

      <div
        id="drop-area"
        onDragLeave={dragLeave}
        onDrop={dragLeave}
        onDragOver={dragOver}
        className="p-10 bottom-[10%] font-display text-white text-2xl z-[100] font-semibold right-0 w-max transition-all bg-black mix-blend-overlay rounded-xl mx-auto mt-[730px] border border-opacity-50 border-gray-500 ring-opacity-60 ring-gray-700"
      >
        Drag &apos;n&apos; drop video here!
      </div>
    </>
  );
}
