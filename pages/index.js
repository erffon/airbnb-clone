import Head from "next/head";
import Header from "../components/Header";
import HousesGrid from "../components/HousesGrid";

export default function Home({ img, title, description, star, price }) {
  //src,title,subtitle,stars,date,price
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
        src={img}
        title={title}
        subtitle={description}
        stars={star}
        date={"Mar 19-24"}
        price={price}
      />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const res = await fetch("https://links.papareact.com/isz");
  const houses = await res.json();

  return {
    props: {
      houses,
    },
  };
};
