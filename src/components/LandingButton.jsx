export default function LandingButton({ text, link }) {
  return (
    <a href={link}>
      <div className="font-display text-white text-xl bg-black px-4 py-1 border-2 border-black rounded-full mix-blend-overlay">
        {text}
      </div>
    </a>
  );
}
