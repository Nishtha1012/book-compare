import { useRouter } from "next/router";
import React from "react";
import SearchBar from "./SearchBar";

/**
 * Header component contains logo , Searchbar and compare button having link to compare page
 * used in _app.js to display over all the components
 *
 * @returns {JSX.Element}
 *
 */

const Header = () => {
  const router = useRouter();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto grid grid-cols-2 p-5 ">
        {/**
         * logo and name
         */}
        <div>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-white p-2 bg-teal-700 rounded-full"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              <polyline points="10 2 10 10 13 7 16 10 16 2" />
            </svg>
            <span className="ml-3 text-xl">Books</span>
          </a>
        </div>

        {/**
         * search bar
         */}
        <div className="flex">
          <div className="flex-1">
            <SearchBar />
          </div>

          {/**
           * compare button
           */}
          <div>
            <button
              onClick={() => router.push("/compare")}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 ml-4 focus:outline-none hover:bg-gray-200 hover:text-teal-700 rounded text-base mt-4 md:mt-0"
            >
              Compare
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1 hover:text-teal-700"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
