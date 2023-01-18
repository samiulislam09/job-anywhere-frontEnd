import Image from "next/image";
import Link from "next/link";
import React from "react";

function footer() {
  return (
    <footer className="p-4 bg-blue-900 text-white sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="flex items-center">
            <Image src="/images/hirefast.png" height={80} width={80} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="/" className="hover:underline ">
                  Github
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-sm  text-white text-center">
        © 2023 Job Anywhere . All Rights Reserved.
      </div>
    </footer>
  );
}

export default footer;
