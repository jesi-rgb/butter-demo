import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function MaskedVideoSketch() {
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
      fg = p5.createVideo("videos/josh-mask.mp4");
      fg.volume(0);
      fg.hide();
      fg.time(1 / 30);
      maskShader.setUniform("fg", fg);

      resolve(fg);
    });

    const bgPromise = new Promise((resolve) => {
      bg = p5.createVideo("videos/josh.mp4");
      bg.volume(0);
      bg.hide();
      bg.time(30.25 / 30);
      maskShader.setUniform("bg", bg);

      resolve(bg);
    });

    Promise.all([bgPromise, fgPromise]).then((v) => {
      // Start both at once when they're both ready
      //   v.map((v) => v.play());
      bg.loop();
      fg.loop();
    });
  };

  let draw = (p5) => {
    p5.plane(p5.width, p5.height);
  };
  return (
    <div className="z-50 border border-blue-800 w-min mx-auto my-10">
      {/* <div className="sky h-[800px] w-[1300px] bg-gradient-to-bl from-sky-200 to-sky-500 -z-10 absolute"></div>
      <div className="absolute opacity-50">
        <Cloud fill="white" size={198} />
      </div>
      <div className="absolute left-52 top-[190px] opacity-90">
        <Cloud fill="white" size={158} />
      </div>

      <div className="sky h-[400px] w-[1300px] bottom-28 bg-gradient-to-bl from-green-600 to-green-900 -z-10 absolute"></div>
      <div className="sun absolute right-[300px] bottom-[500px] -z-10 w-80 h-80 rounded-full bg-yellow-200"></div> */}
      <div className="z-50 pointer-events-none">
        <Sketch preload={preload} setup={setup} draw={draw} />
      </div>
    </div>
  );
}
