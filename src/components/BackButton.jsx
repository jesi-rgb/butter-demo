export default function BackButton({ link = "/", text = "Back home!" }) {
  return (
    <a href={link}>
      <div className="bg-purple-900 w-max m-2 mt-12 text-purple-100 font-display font-semibold px-4 py-2 rounded-full hover:-translate-y-1 hover:bg-purple-600 transition-all">
        {text}
      </div>
    </a>
  );
}
