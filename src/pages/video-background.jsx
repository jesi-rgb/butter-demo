import Draggable3DText from "@/components/3D/Draggable3DText";
import VideoSandwhichStacked from "@/components/p5/VideoSandwichStacked";

export default function VideoBackground() {
  return (
    <>
      <div className="text-center text-5xl mt-10 font-serif font-bold text-blue-800">
        Video Composition
      </div>

      <VideoSandwhichStacked stackedVideoPath={"videos/mega-josh-t.webm"}>
        {
          // <div className="text-[20rem] absolute left-[230px] top-[10px] text-blue-900 text-center font-bold font-serif">
          //   2023
          // </div>
        }
        <Draggable3DText
          bounds={null}
          wants3D={true}
          wantsMetal={true}
          wantsMoving={true}
        />
      </VideoSandwhichStacked>

      <a href="/">
        <button
          className="bg-blue-800 absolute bottom-0 m-2 text-blue-100 px-4 py-2 rounded-full hover:-translate-y-1 hover:bg-blue-600 transform transition-all
          "
        >
          Back home!
        </button>
      </a>
    </>
  );
}
