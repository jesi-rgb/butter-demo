import LandingButton from "@/components/LandingButton";

export default function Home() {
  return (
    <>
      <div className="main w-screen">
        <div className="mx-auto content">
          <h1
            className="text-center mt-40 text-8xl md:text-[100px] xl:text-[200px]  mix-blend-overlay font-hero"
            style={{ filter: "drop-shadow(4px 4px 3px #0E005E44)" }}
          >
            Butter
          </h1>
          <h2
            className="text-4xl xl:text-5xl font-extralight tracking-tighter mix-blend-overlay font-display text-center max-w-md mx-auto"
            style={{ filter: "drop-shadow(2px 2px 1px #0E005E33)" }}
          >
            The next generation motion graphics tool
          </h2>
          <div className="flex flex-col space-y-8 items-center mt-24 justify-evenly">
            <LandingButton text={"Audio Reactive"} link={"/audio-reactive"} />
            <LandingButton text={"Demo!"} link={"/demo"} />
          </div>
        </div>
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
      </div>
    </>
  );
}
