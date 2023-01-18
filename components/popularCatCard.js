import Link from "next/link";
import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";

const PopularCategoryCard = () => {
  return (
    <Link
      href="/"
      className=" shadow-sm p-15 text-black py-20 text-center rounded hover:bg-blue-200"
    >
      <BsGrid3X3GapFill className="text-6xl mx-auto text-blue-500" />
      <h3 className="text-xl py-5 font-semibold">Web Development</h3>
      <p className="text-red-600">12 open jobs</p>
    </Link>
  );
};

export default PopularCategoryCard;
