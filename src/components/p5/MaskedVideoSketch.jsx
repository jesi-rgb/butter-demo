import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function MaskedVideoSketch({ stackedVideo }) {
  let maskShader;
  let preload = (p5) => {
    maskShader = p5.loadShader(
      "shaders/maskShader.vert",
      "shaders/maskShader.frag"
    );
  };

  let setup = (p5, parentRef) => {
    p5.createCanvas(1280, 720, p5.WEBGL).parent(parentRef);

    // load and set the shader
    p5.shader(maskShader);
    maskShader.setUniform("video", stackedVideo);
  };

  let draw = (p5) => {
    p5.noStroke();
    p5.rect(-p5.width / 2, -p5.height / 2, p5.width, p5.height);
  };
  return <Sketch preload={preload} setup={setup} draw={draw} />;
}
