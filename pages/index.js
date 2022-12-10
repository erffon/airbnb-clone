import Head from "next/head";
import Header from "../components/Header";
import HousesGrid from "../components/HousesGrid";

export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>Airbnb clone 📋</title>
        <meta
          name="description"
          content="Airbnb website clone by Erfan Ranjbaran using React and Next. Airbnb website clone is one of the best exercises for programming and React development. It can be so insightful."
        />
        <link rel="icon" href="/airbnb-favicon.ico" />
      </Head>
      <Header activeCategory="Trending" />
      <HousesGrid houses={results} />
    </>
  );
}

export const getStaticProps = async () => {
  const resp = await fetch(
    "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json"
  );
  const results = await resp.json();

  return {
    props: {
      results,
    },
  };
};
