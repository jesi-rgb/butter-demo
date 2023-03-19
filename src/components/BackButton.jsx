export default function BackButton({ link = "/", text = "Back home!" }) {
  return (
    <a href={link}>
      <button className="bg-purple-900 z-10 absolute bottom-0 m-2 text-purple-100 font-display font-semibold px-4 py-2 rounded-full hover:-translate-y-1 hover:bg-purple-600 transform transition-all">
        {text}
      </button>
      <div className="bg-purple-900  absolute bottom-0 m-2 text-purple-100 font-display font-semibold px-4 py-2 rounded-full hover:-translate-y-1 hover:bg-purple-600 ">
        {text}
      </div>
    </a>
  );
}
