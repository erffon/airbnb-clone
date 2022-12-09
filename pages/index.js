import Head from "next/head";
import Header from "../components/Header";
import HousesGrid from "../components/HousesGrid";

export default function Home({ results }) {
  console.log("results :", results);
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
      {/* <HousesGrid houses={results} /> */}
    </>
  );
}

export const getStaticProps = async () => {
  const results = fetch(
    "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  return {
    props: {
      results,
    },
  };
};
