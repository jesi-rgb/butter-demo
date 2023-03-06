import dynamic from "next/dynamic";
import { useState } from "react";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function P5Sketch() {
  const [maskShader, setShader] = useState(null);

  //   let preload = (p5) => {
  //     setShader(
  //       p5.loadShader("shaders/maskShader.vert", "shaders/maskShader.frag")
  //     );
  //   };

  let setup = (p5, parentRef) => {
    p5.createCanvas(600, 600, p5.WEBGL).parent(parentRef);

    console.log("mierdon");

    let bg, fg;

    const bgPromise = new Promise((resolve) => {
      bg = p5.createVideo("videos/video.webm", resolve);
      bg.volume(0);
      bg.hide();
    });

    const fgPromise = new Promise((resolve) => {
      fg = p5.createVideo("videos/mask_1200x1200.mp4", resolve);
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
    // p5.shader(maskShader);
    // maskShader.setUniform("bg", bg);
    // maskShader.setUniform("fg", fg);
    p5.noStroke();
    p5.plane(p5.width, p5.height);
  };
  return <Sketch setup={setup} draw={draw} />;
}
