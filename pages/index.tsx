import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import PopularCategory from "../components/popularCat";
import TopJobs from "../components/topJobs";

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <PopularCategory />
      <TopJobs />
    </div>
  );
};

export default Home;
