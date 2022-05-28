import type { NextPage } from "next";
import { FirstSection } from "../Containers/FirstSection";
import { SecondSection } from "../Containers/SecondSection";

const Home: NextPage = () => {
  return (
    <>
      <FirstSection />
      <SecondSection />
    </>
  );
};

export default Home;
