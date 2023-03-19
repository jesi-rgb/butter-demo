import BackButton from "./BackButton";

export default function Layout({ children }) {
  return (
    <div className="main">
      {children}

      <style global jsx>{`
        .main:before {
          background: radial-gradient(rgba(2, 0, 36, 0) 0, #fafafa 100%);
          position: absolute;
          content: "";
          z-index: -2;
          width: 100%;
          height: 100%;
          top: 0;
          --hue: 280;
          --second-hue: calc(var(--hue) + 180);
          background-image: radial-gradient(
              ellipse at top,
              hsla(var(--hue), 98%, 72%, 1) 1px,
              transparent 100%
            ),
            radial-gradient(
              ellipse at bottom,
              hsla(var(--second-hue), 98%, 61%, 1) 0px,
              transparent 30%
            );
          opacity: 0.5;
          background-size: 150% 150%;
        }
      `}</style>
      <BackButton />
    </div>
  );
}
