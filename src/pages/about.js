/* eslint-disable @next/next/no-html-link-for-pages */
import Layout from "@/components/Layout";
import { ArrowBigUp, Camera, MousePointerClick, Rotate3d } from "lucide-react";

export default function About() {
  return (
    <>
      <Layout>
        <div className="mx-auto mix-blend-overlay max-w-xl text-justify font-display tracking-tight text-xl my-20 text-black flex flex-col space-y-7">
          <h1 className="text-4xl font-hero border-b border-black font-bold">
            A little explainer on what to expect
          </h1>
          <p>
            This little demo has some quirky things under its belt in order to
            function &quot;properly&quot;. I&apos;ll list them over here so we
            are all on the same page.
          </p>
          <p>
            The viewport we are presented with is a stack of 3 elements. A video
            background, a middle layer of 3D elements and a cropped video
            foreground.
          </p>
          <p>
            The video is actually hidden and upon dropping an item into the box
            below, we make it visible. It does not matter what we throw in
            there. We just check <span className="font-semibold">if</span>{" "}
            something dropped and reveal the video layers.
          </p>
          <p>
            The 3D elements are being presented through a real-time 3D
            environment. To pretend layout movement and positioning, we are
            moving the camera. To pretend rotation, we just rotate the camera
            around. And zooming the viewport with the scrollwheel feels like
            scaling the object itself. This works because there&apos;s no point
            of reference.
          </p>
          <h2 className="text-4xl font-hero border-b border-black font-bold">
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
            clicking the viewport will reset the text&apos;s rotation. In
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
          <p>Using the scroll wheel will scale the text object.</p>
          <p>Left click moves the object.</p>
          <p>Right click rotates the object.</p>
        </div>
      </Layout>
    </>
  );
}
