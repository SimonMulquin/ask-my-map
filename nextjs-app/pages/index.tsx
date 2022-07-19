import Head from "next/head";
import Map from "../components/Map";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ask my map</title>
        <meta name="description" content="Why don't you ask the map ?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Map />
      </main>
    </div>
  );
}
