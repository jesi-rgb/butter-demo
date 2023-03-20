export default function LandingButton({ text, link }) {
  return (
    <a href={link} className="">
      <button className="bg-purple-900 text-4xl z-10 m-2 text-purple-200 font-hero tracking-wide font-semibold px-5 py-2 rounded-full hover:-translate-y-1 hover:bg-purple-600 transform transition-all">
        {text}
      </button>
    </a>
  );
}
