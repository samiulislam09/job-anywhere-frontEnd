import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import PopularCategory from "../components/popularCat";
import TopJobs from "../components/topJobs";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <PopularCategory />
      <TopJobs />
      <Footer />
    </div>
  );
};

export default Home;
