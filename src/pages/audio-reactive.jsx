import Layout from "@/components/Layout";

export default function AudioReactive() {
  return (
    <>
      <Layout>
        <h1 className="font-hero mix-blend-overlay font-bold text-7xl text-center my-10">
          Audio Reactive Text
        </h1>
        <div className="flex mt-20 gap-14 mx-10">
          <iframe
            className="w-3/4 mx-auto rounded-xl"
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/u5VwTaKjIDU"
            title="Butter, the next generation motion graphics tool"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          <div className="font-display mix-blend-overlay w-1/4 text-3xl mx-auto flex flex-col space-y-4 self-end tracking-tighter">
            <p>
              Just a small little demo about how reactive text would work in
              butter, the next generation motion graphics tool.{" "}
            </p>
            <p>
              Ideally, the user will simply drop in whatever audio they have
              available and Butter will take care of the rest. Animations will
              snap to the beat and text can freely dance to the music.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
