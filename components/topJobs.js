import React from "react";
import TopJobsCard from "./topJobsCard";
import Title from "./title";
import Link from "next/link";

function TopJobs() {
  return (
    <div className="py-3 mx-auto max-w-[1320px] text-black">
      <Title>Top Jobs</Title>
      <TopJobsCard />
      <TopJobsCard />
      <TopJobsCard />
      <TopJobsCard />
      <TopJobsCard />
      <TopJobsCard />
      <div className="content-center">
        <Link href="/" className="btn btn-primary mx-auto">
          Browse More
        </Link>
      </div>
    </div>
  );
}

export default TopJobs;
