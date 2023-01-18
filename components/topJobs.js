import React from "react";
import TopJobsCard from "./topJobsCard";

function TopJobs() {
  return (
    <div className="py-3 mx-auto max-w-[1320px] text-black">
      <TopJobsCard />
      <TopJobsCard />
      <TopJobsCard />
    </div>
  );
}

export default TopJobs;
