import LandingButton from "@/components/LandingButton";

export default function Home() {
  return (
    <>
      <div className="main w-screen">
        <div className="mx-auto content">
          <h1 className="text-center text-9xl mix-blend-overlay tracking-tighter font-display font-extrabold">
            Butter
          </h1>
          <h2 className="text-5xl font-extralight tracking-tighter mix-blend-overlay font-display text-center max-w-md mt-5 mx-auto">
            The next generation motion graphics tool
          </h2>
          <div className="flex flex-row space-x-4 mt-24 max-w-4xl justify-evenly">
            <LandingButton text={"Editor"} link={"/editor"} />
            <LandingButton
              text={"Transparent Video"}
              link={"/video-background"}
            />
            <LandingButton text={"Music Integration"} linke={"/music"} />
          </div>
        </div>
        <style global jsx>{`
          .main {
            min-height: 100vh;
            position: fixed;
            display: flex;
            justify-content: center;
            padding: 120px 24px 160px 24px;
          }
          .main:before {
            background: radial-gradient(rgba(2, 0, 36, 0) 0, #fafafa 100%);
            position: absolute;
            content: "";
            z-index: -2;
            width: 100%;
            height: 100%;
            top: 0;
            --hue: 250;
            --second-hue: calc(var(--hue) + 180);
            background-image: radial-gradient(
                at 17% 21%,
                hsla(var(--hue), 98%, 72%, 1) 0px,
                transparent 40%
              ),
              radial-gradient(
                at 92% 66%,
                hsla(var(--hue), 98%, 61%, 1) 0px,
                transparent 80%
              ),
              radial-gradient(
                at 0% 99%,
                hsla(var(--hue), 96%, 67%, 1) 0px,
                transparent 40%
              );
            opacity: 0.3;
            background-size: 100% 100%;
            background-blend-mode: darken, darken, darken, darken, darken,
              darken, darken;
          }
        `}</style>
      </div>
    </>
  );
}
