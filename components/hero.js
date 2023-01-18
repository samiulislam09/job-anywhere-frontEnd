import React from "react";

function Hero() {
  return (
    <section className="bg-gray-500">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 "
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-black px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium">
            Calling feature with recruter
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          We are waiting for you
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          excepturi cumque? Itaque quam illum, velit nostrum voluptatum
          consectetur iusto aliquid!
        </p>
        <form className="flex flex-col gap-2 mb-8 sm:gap-0 lg:mb-16  sm:flex-row justify-center sm:space-y-0 sm:space-x-4 text-black font-semibold">
          <input
            type="text"
            className="inline-flex justify-center outline-none items-center py-3 px-1 bg-white rounded"
            placeholder="Job title"
          />
          <input
            type="text"
            className="inline-flex justify-center outline-none items-center py-3 px-1 bg-white rounded"
            placeholder="Location"
          />
          <input className="btn btn-primary" type="submit" value="search" />
        </form>
      </div>
    </section>
  );
}

export default Hero;
