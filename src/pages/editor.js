import Head from "next/head";
import AssetLibrary from "@/components/AssetLibrary";
import ButterCanvas from "@/components/ButterCanvas";

export default function Home() {
  let dragged = null;
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
