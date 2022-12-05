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
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "aa89cf8074msh58afd90dbc41711p1f6e1ejsn0ea3bd63df06",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  const results = await fetch(
    "https://airbnb13.p.rapidapi.com/autocomplete?query=paris",
    options
  );

  return {
    props: {
      result,
    },
  };
};
