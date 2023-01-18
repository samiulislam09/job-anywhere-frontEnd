import React from "react";
import TopJobsCard from "./topJobsCard";
import Title from "./title";

function TopJobs() {
  return (
    <div className="py-3 mx-auto max-w-[1320px] text-black">
      <Title>Top Jobs</Title>
      <TopJobsCard />
      <TopJobsCard />
      <TopJobsCard />
    </div>
  );
}

export default TopJobs;
