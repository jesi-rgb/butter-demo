import Head from "next/head";
import AssetLibrary from "@/components/AssetLibrary";
import EffectSideBar from "@/components/EffectSideBar";
import Draggable3DText from "@/components/3D/Draggable3DText";
import useDnD from "@/hooks/useDnD";
import { useState } from "react";
import ImageItem from "@/components/ImageItem";

const onDropAreaMouseEnter = (e) => {
  if (this.state.activeDrags) {
    console.log("drop");
    console.log(e);
    // e.target.classList.add("hovered");
  }
};

export default function Home() {
  let items = useDnD();
  console.log(items);
  let [itemArray, setItemArray] = useState([]);

  return (
    <>
      <Head>
        <title>Butter: Next gen graphics tool</title>
        <meta name="description" content="Butter: Next gen graphics tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        id="wrapper"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          alignContent: "center",
          verticalAlign: "center",
          lineHeight: "100vh",
          opacity: 0,
          visibility: "hidden",
          background: "#F87171",
          color: "white",
          fontFamily: "cursive",
          fontSize: "100px",
          textAlign: "center",
        }}
      >
        drop here~
      </div>

      <main className="h-screen flex flex-row">
        <AssetLibrary />
        <div
          onMouseEnter={onDropAreaMouseEnter}
          className="drop-target text-center w-2/4 col-span-2 my-auto font-bold text-2xl"
        >
          {itemArray.map((e) => e)}
        </div>
        <EffectSideBar />
      </main>
    </>
  );
}
