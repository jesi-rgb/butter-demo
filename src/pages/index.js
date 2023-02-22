import Head from "next/head";
import { Oswald } from "@next/font/google";
import AssetLibrary from "@/components/AssetLibrary";
import EffectSideBar from "@/components/EffectSideBar";

const rubik = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Butter: Next gen graphics tool</title>
        <meta name="description" content="Butter: Next gen graphics tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-row">
        <AssetLibrary />
        <div className="text-center w-2/4 col-span-2 my-auto font-bold text-2xl">
          main content
        </div>
        <EffectSideBar />
      </main>
    </>
  );
}
