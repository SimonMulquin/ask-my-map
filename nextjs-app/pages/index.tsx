import Head from "next/head";
import Map from "../components/Map";
import { Props } from "../types";

export default function Home({ markers }: Props) {
  return (
    <div>
      <Head>
        <title>Ask my map</title>
        <meta name="description" content="Why don't you ask the map ?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Map markers={markers} />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:1337/api/markers");
  const data = await res.json();

  const markers = data?.data || [];
  return { props: { markers } };
};
