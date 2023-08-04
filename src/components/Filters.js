import React from "react";
import useFilter from "../talons/useFilter";

/**
 * Filter component contains a filter button by clicking on this all filters are listed
 * on choosing a filter url is set and appropriate data is displayed
 * on choosing filter cllearfilter button is displayed by clickinf you can clear all filter
 *
 * @returns {JSX.Element}
 *
 */

const Filters = () => {
  /**available filters */
  let filters = ["ebooks", "free-ebooks", "paid-ebooks"];

  /**functions for handling filters */
  const { setshowfilter, showfilter, handleFilterChange, filter, clearfilter } =
    useFilter();

  return (
    <div className="flex relative ms-10">
      <div
        className="bg-slate-200 inline-block p-3 rounded  hover:cursor-pointer justify-end "
        onClick={() => setshowfilter(!showfilter)}
      >
        {/**filter button */}
        <div className="flex items-center font-medium">
          <span>Filter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="font-bold ms-2"
            viewBox="0 0 16 16"
            strokeWidth={2}
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
      </div>
      {/**filter list */}
      {showfilter && (
        <div className="absolute z-50 bg-white top-11 rounded border shadow-xl w-28">
          {filters.map((filterr, index) => (
            <li
              class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-indigo-600 hover:text-white"
              key={index}
            >
              <button
                onClick={(e) => handleFilterChange(e)}
                id={filterr}
                className="w-full"
              >
                {filterr}
              </button>
            </li>
          ))}
        </div>
      )}
      {/**clear filter button */}
      {filter && (
        <div
          className="bg-slate-200 inline-block p-3 rounded font-medium hover:cursor-pointer justify-end ms-10"
          onClick={clearfilter}
        >
          <div className="flex items-center">
            <span>Clear Filter</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg ms-2"
              viewBox="0 0 16 16"
              strokeWidth={2}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
