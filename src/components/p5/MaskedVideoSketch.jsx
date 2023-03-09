import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function MaskedVideoSketch({ video, mask }) {
  let maskShader;
  let bg, fg;

  let preload = (p5) => {
    maskShader = p5.loadShader(
      "shaders/maskShader.vert",
      "shaders/maskShader.frag"
    );
  };

  let setup = (p5, parentRef) => {
    p5.createCanvas(1280, 720, p5.WEBGL).parent(parentRef);
    p5.shader(maskShader);

    const fgPromise = new Promise((resolve) => {
      fg = p5.createVideo(mask);
      fg.volume(0);
      fg.hide();
      maskShader.setUniform("fg", fg);

      resolve(fg);
    });

    const bgPromise = new Promise((resolve) => {
      bg = p5.createVideo(video);
      bg.volume(0);
      bg.hide();
      maskShader.setUniform("bg", bg);

      resolve(bg);
    });

    Promise.all([bgPromise, fgPromise]).then(() => {
      bg.loop();
      fg.loop();
    });
  };

  let draw = (p5) => {
    p5.noStroke();
    p5.plane(p5.width, p5.height);
  };
  return <Sketch preload={preload} setup={setup} draw={draw} />;
}
