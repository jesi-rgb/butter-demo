import Head from "next/head";
import AssetLibrary from "@/components/AssetLibrary";
import EffectSideBar from "@/components/EffectSideBar";
import Draggable3DText from "@/components/3D/Draggable3DText";
import useDnD from "@/hooks/useDnD";
import { useEffect, useState } from "react";
import ImageItem from "@/components/ImageItem";
import ButterCanvas from "@/components/ButterCanvas";

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
        <ButterCanvas />
      </main>
    </>
  );
}
