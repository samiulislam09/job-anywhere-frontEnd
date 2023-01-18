import Image from "next/image";
import Link from "next/link";
import React from "react";

function topJobsCard() {
  return (
    <div className="mx-auto py-4 flex justify-between items-center  px-8 rounded bg-gray-200 my-3">
      <div className="flex items-center">
        <Image
          className="rounded mr-5"
          src="http://dummy.tcdw.org/medrect"
          alt="hhh"
          width={64}
          height={100}
        />
        <div>
          <p className="text-gray-500">Company name</p>
          <h2 className="text-3xl font-bold">Job title</h2>
          <p>location</p>
        </div>
      </div>
      <div>
        <Link href="/" className="btn btn-primary rounded-full mr-4">
          Apply now
        </Link>
        <p className="hidden md:inline-block">Published date 24 feb 2022</p>
      </div>
    </div>
  );
}

export default topJobsCard;
