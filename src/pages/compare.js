import React from "react";

import { size } from "lodash";

import useCompare from "../talons/useCompare";
import CompareRow from "../components/CompareRow";
import Head from "next/head";

/**
 * Displays compare table for all the books that are added to compare
 * Provides a link back to book listing page
 * If No books to compare it displays the text of noi books to compare
 * @returns {JSX.Element}
 */

const compare = () => {
  const { compared, router } = useCompare();
  return (
    <>
      <Head>
        <title>Books | Compare</title>
      </Head>
      {/**back button */}
      <div
        className="bg-slate-200 inline-block p-3 rounded font-medium hover:cursor-pointer justify-end ms-10 max-sm:ms-5"
        onClick={() => router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </div>
      {size(compared) > 0 ? (
        <>
          <div className="container mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              {/**table headings */}

              <thead className="text-xs text-teal-700 uppercase bg-teal-50 dark:bg-teal-700 dark:text-teal-400">
                <tr>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pages
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Publisher
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Average Rating
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/** all books to compare */}
                {compared.map((book) => (
                  <CompareRow book={book} key={book.id} />
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h3 className="text-center">No Books to compare!!</h3>
      )}
    </>
  );
};

export default compare;
