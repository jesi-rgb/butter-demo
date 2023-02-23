import Head from "next/head";
import { Oswald } from "@next/font/google";
import AssetLibrary from "@/components/AssetLibrary";
import EffectSideBar from "@/components/EffectSideBar";
import Scene from "@/components/3D/Scene";
import TextStackEffects from "@/components/3D/TextStackEffects";
import Draggable from "react-draggable";

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
          <Draggable cancel=".no-cursor">
            <div className="w-min p-3 border-2 border-red-300 cursor-pointer">
              <Scene>
                <TextStackEffects />
              </Scene>
            </div>
          </Draggable>
        </div>
        <EffectSideBar />
      </main>
    </>
  );
}
