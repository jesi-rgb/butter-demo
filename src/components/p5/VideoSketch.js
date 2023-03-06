export default function VideoSketch() {
  return (
    <video
      className="w-min -z-10 mx-auto absolute left-0 right-0 my-10"
      src="videos/josh.mp4"
      autoPlay
      muted
      loop
    />
  );
}
