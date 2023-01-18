import React from "react";

function topJobsCard() {
  return (
    <div className="mx-auto py-[50px] flex flex-col">
      <div className="flex">
        <img src="http://dummy.tcdw.org/medrect" alt="hhh" />
        <div>
          <p>Company name</p>
          <h2>Job title</h2>
          <p>location</p>
        </div>
      </div>
      <div>
        <p>Date</p>
      </div>
    </div>
  );
}

export default topJobsCard;
