import Head from "next/head";
import Header from "../components/Header";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb clone 📋</title>
        <meta
          name="description"
          content="Airbnb website clone by Erfan Ranjbaran"
        />
        <link rel="icon" href="/airbnb-favicon.ico" />
      </Head>
      <Header />
      <Categories activeCategory="" />
    </>
  );
}
