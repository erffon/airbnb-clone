import Head from "next/head";
import Header from "../components/Header";
import HousesGrid from "../components/HousesGrid";

export default function Home(result) {
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
      <HousesGrid houses={result} />
    </>
  );
}

export const getStaticProps = async () => {
  const respond = await fetch("https://dummyjson.com/products");
  const result = await respond.json();

  return {
    props: {
      result,
    },
  };
};
