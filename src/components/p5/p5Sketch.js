import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function P5Sketch() {
  let maskShader;
  let bg, fg;

  let preload = (p5) => {
    maskShader = p5.loadShader(
      "shaders/maskShader.vert",
      "shaders/maskShader.frag"
    );
  };
  let setup = (p5, parentRef) => {
    p5.createCanvas(1300, 800, p5.WEBGL).parent(parentRef);

    console.log("mierdon");

    const bgPromise = new Promise((resolve) => {
      bg = p5.createVideo("videos/josh.mp4", resolve);
      bg.volume(0);
      bg.hide();
    });

    const fgPromise = new Promise((resolve) => {
      fg = p5.createVideo("videos/josh-mask.mp4", resolve);
      fg.volume(0);
      fg.hide();
    });

    Promise.all([bgPromise, fgPromise]).then(() => {
      // Start both at once when they're both ready
      bg.loop();
      fg.loop();
    });
  };

  let draw = (p5) => {
    p5.clear();
    p5.shader(maskShader);
    maskShader.setUniform("bg", bg);
    maskShader.setUniform("fg", fg);
    p5.noStroke();
    p5.plane(p5.width, p5.height);
  };
  return (
    <div className="border border-blue-800 w-min mx-auto my-10">
      <Sketch preload={preload} setup={setup} draw={draw} />
    </div>
  );
}
