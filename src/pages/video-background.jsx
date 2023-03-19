/* eslint-disable @next/next/no-html-link-for-pages */
import Draggable3DText from "@/components/3D/Draggable3DText";
import BackButton from "@/components/BackButton";
import Layout from "@/components/Layout";
import VideoSandwhichStacked from "@/components/p5/VideoSandwichStacked";

export default function VideoBackground() {
  return (
    <Layout>
      <div className="text-center text-7xl mj-10 font-display font-bold text-black mix-blend-overlay">
        Butter
      </div>

      <VideoSandwhichStacked stackedVideoPath={"videos/mega-josh.mp4"}>
        <Draggable3DText
          bounds={null}
          wants3D={true}
          wantsMetal={true}
          wantsMoving={true}
        />
      </VideoSandwhichStacked>

      <BackButton />
    </Layout>
  );
}
