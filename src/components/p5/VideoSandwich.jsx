import MaskedVideoSketch from "./MaskedVideoSketch";
import VideoSketch from "./VideoSketch";

export default function VideoSandwich({ children, video, mask }) {
  return (
    <div className="relative my-20 mx-auto">
      <div className="absolute -z-50">
        <VideoSketch video={video} />
      </div>

      <div className="z-0 absolute">{children}</div>

      <div className="absolute z-50 border border-blue-800">
        <MaskedVideoSketch video={video} mask={mask} />
      </div>
    </div>

  );
}
