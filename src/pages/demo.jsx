import Draggable3DText from "@/components/3D/Draggable3DText";
import BackButton from "@/components/BackButton";
import Layout from "@/components/Layout";
import VideoSandwhichStacked from "@/components/p5/VideoSandwichStacked";

export default function Demo() {
  return (
    <>
      <Layout>
        <VideoSandwhichStacked stackedVideoPath={"/videos/mega-josh.mp4"}>
          <Draggable3DText fitScreen={true} />
        </VideoSandwhichStacked>
        <BackButton link="/about" text="About this demo" />
      </Layout>
    </>
  );
}
