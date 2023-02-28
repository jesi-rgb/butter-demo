/* eslint-disable @next/next/no-html-link-for-pages */
import { Box, Gem, Leaf, Type } from "lucide-react";

export default function About() {
  return (
    <>
      <div className="mx-auto max-w-xl text-justify font-serif text-xl my-20 text-blue-800 flex flex-col space-y-7">
        <h1 className="text-2xl font-bold font-serif mb-10">
          A little explainer on what to expect
        </h1>
        <p>
          This little demo has some quirky things under its belt in order to
          function &quot;properly&quot;. I&apos;ll list them over here so we are
          all on the same page.
        </p>
        <p>
          The{" "}
          <span className="inline-block align-text-top">
            <Type size={20} strokeWidth={2.5} />
          </span>{" "}
          block seemingly spawns some text when dropped into the canvas. But, in
          reality, so does every component.
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
          Another trick has to do with the order in which the effect appear to
          be applied. The effects will always apply in the same order
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
        <div>
          <a href="/">
            <button
              className="bg-blue-800 text-blue-100 px-4 py-2 rounded-full hover:-translate-y-1 hover:bg-blue-600 transform transition-all
          "
            >
              Back home!
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
