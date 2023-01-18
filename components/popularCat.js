import React from "react";
import PopularCategoryCard from "./popularCatCard";
import Title from "./title";

const PopularCategory = () => {
  return (
    <section className="py-3 mx-auto max-w-[1320px] text-black">
      <Title>Top Categories</Title>
      <div className="mx-auto py-[50px] grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
        <PopularCategoryCard />
        <PopularCategoryCard />
        <PopularCategoryCard />
        <PopularCategoryCard />
        <PopularCategoryCard />
        <PopularCategoryCard />
      </div>
    </section>
  );
};

export default PopularCategory;
