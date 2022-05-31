import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { FirstSection } from "../Containers/FirstSection";
import { SecondSection } from "../Containers/SecondSection";
import { ThirdSection } from "../Containers/ThirdSection";

const Home: NextPage = ({ planets }: any) => {
  return (
    <>
      <Head>
        <title>Planets</title>
        <meta
          name="description"
          content="Shows all planets in our Solar System"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstSection />
      <SecondSection />
      <ThirdSection planets={planets} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const url =
    "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list";

  const response = await fetch(url, {
    headers: {
      "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
      "X-RapidAPI-Key": "4406ccacc0msh520c1230d23c4d3p1f49f3jsn5f70dd24d631",
    },
  });
  const data = await response.json();

  return {
    props: {
      planets: data,
    },
  };
};
