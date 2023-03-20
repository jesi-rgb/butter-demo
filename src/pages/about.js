/* eslint-disable @next/next/no-html-link-for-pages */
import Layout from "@/components/Layout";
import {
  ArrowBigUp,
  Box,
  Camera,
  Delete,
  Gem,
  Leaf,
  MousePointerClick,
  Rotate3d,
  Type,
} from "lucide-react";

export default function About() {
  return (
    <>
      <Layout>
        <div className="mx-auto mix-blend-overlay max-w-xl text-justify font-display tracking-tight text-xl my-20 text-black flex flex-col space-y-7">
          <h1 className="text-4xl font-hero border-b border-black font-bold tracking-wide">
            A little explainer on what to expect
          </h1>
          <p>
            This little demo has some quirky things under its belt in order to
            function &quot;properly&quot;. I&apos;ll list them over here so we
            are all on the same page.
          </p>
          <p>
            The{" "}
            <span className="inline-block align-text-top">
              <Type size={20} strokeWidth={2.5} />
            </span>{" "}
            block seemingly spawns some text when dropped into the canvas. But,
            in reality, so does every component.
          </p>
          <p>
            The <b>Effect</b> blocks also spawn{" "}
            <span className="inline-block align-text-top">
              <Type size={20} strokeWidth={2.5} />
            </span>{" "}
            text components. It&apos;s only when they&apos;re dropped into an
            already existing text component that they behave differently.
          </p>
          <p>
            Another trick has to do with the order in which the effects appear
            to be applied. The effects will always apply in the same order
            independently of the effect we drop into. It will always be first{" "}
            <span className="inline-block align-text-top">
              <Box size={20} strokeWidth={2.5} />
            </span>{" "}
            3D, then{" "}
            <span className="inline-block align-text-top">
              <Gem size={20} strokeWidth={2.5} />
            </span>{" "}
            shiny/metal, and lastly,{" "}
            <span className="inline-block align-text-top">
              <Leaf size={20} strokeWidth={2.5} />
            </span>{" "}
            motion.
          </p>
          <h2 className="text-4xl font-hero border-b border-black font-bold tracking-wide">
            Some tricks
          </h2>
          <p>
            Shift{" "}
            <span className="inline-block align-text-top">
              <ArrowBigUp size={20} strokeWidth={2.5} />
            </span>{" "}
            +{" "}
            <span className="inline-block align-text-top">
              <MousePointerClick size={20} strokeWidth={2.5} />
            </span>{" "}
            clicking the little viewport will reset the text&apos;s rotation. In
            reality, we are just changing its{" "}
            <span className="inline-block align-text-top">
              <Rotate3d size={20} strokeWidth={2.5} />
            </span>{" "}
            rotation to look at the{" "}
            <span className="inline-block align-text-bottom mb-[1.8px]">
              <Camera size={20} strokeWidth={2.5} />
            </span>{" "}
            camera.
          </p>
          <p>
            Hitting the{" "}
            <span className="inline-block align-text-bottom mb-[1.8px]">
              <Delete size={20} strokeWidth={2.5} />
            </span>{" "}
            delete key will remove the last element added. This will
            unfortunately reset all the existing ones.
          </p>
        </div>
      </Layout>
    </>
  );
}
