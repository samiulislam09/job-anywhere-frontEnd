import Image from "next/image";
import React, { useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const user = true;

  return (
    <nav className="w-full shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between md:block">
            <a href="javascript:void(0)">
              <Image src="/images/hirefast.png" height={80} width={80} />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black hover:text-indigo-200">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="text-black hover:text-indigo-200">
                <a href="javascript:void(0)">Blog</a>
              </li>
              <li className="text-black hover:text-indigo-200">
                <a href="javascript:void(0)">About US</a>
              </li>
              <li className="text-black hover:text-indigo-200">
                <a href="javascript:void(0)">Contact US</a>
              </li>
            </ul>

            {!user && (
              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <a
                  href="javascript:void(0)"
                  className="inline-block w-full px-4 py-2 text-center text-black bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Sign in
                </a>
                <a
                  href="javascript:void(0)"
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                  Sign up
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white text-black rounded-box w-52"
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Resume</a>
                </li>
                <li>
                  <a>Applied Jobs</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <a
                href="javascript:void(0)"
                className="px-4 py-2 text-black bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </a>
              <a
                href="javascript:void(0)"
                className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
