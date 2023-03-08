export default function VideoSketch({ video }) {
  return (
    <video
      className="w-min -z-10 mx-auto absolute left-0 right-0 my-10"
      src={video}
      autoPlay
      muted
      loop
    />
  );
}
