import Head from "next/head";
import Header from "../components/Header";
import HousesGrid from "../components/HousesGrid";

export default function Home(houses) {
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
      <HousesGrid
        src={houses.houses.img}
        title={houses.houses.title}
        subtitle={houses.houses.location}
        stars={houses.houses.star}
        date={"Mar 19-24"}
        price={houses.houses.price}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const houses = await res.json();

  return {
    props: {
      houses,
    },
  };
};
