export default function LandingButton({ text, link }) {
  return (
    <a href={link}>
      <div className="font-display w-fit text-white text-2xl bg-gradient-to-b from-stone-600 to-stone-900 bg-blend-overlay px-6 py-1 pb-2 border-2 border-stone-700 rounded-full mix-blend-overlay hover:bg-gradient-to-t transition-all duration-200 ring-2 ring-black">
        {text}
      </div>
    </a>
  );
}
