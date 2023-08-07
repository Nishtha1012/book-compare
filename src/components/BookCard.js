import React from "react";

import { includes, size } from "lodash";
import PropTypes from "prop-types";

import useBookCard from "../talons/useBookCard";

/**
 * This component is used for displaying individual book card
 * Parent component is index.js
 * @param {object} book
 * @param {string} book.id
 * @param {object} book.saleInfo
 * @param {boolean} book.saleInfo.isEbook
 * @param {string} book.saleInfo.saleability
 * @param {object} book.volumeInfo
 * @param {string} book.volumeInfo.title
 * @param {string} book.volumeInfo.publisher
 * @param {string} book.volumeInfo.publishedDate
 * @param {number} book.volumeInfo.averageRating
 * @param {object} book.volumeInfo.imageLinks
 * @param {string[]} book.volumeInfo.authors
 * @param {string} book.volumeInfo.imageLinks.thumbnail
 *
 * @returns {JSX.Element}
 */

const BookCard = ({ book }) => {
  const { toCompare, handleAddCompare, handleRemoveCompare } = useBookCard();
  const isIncluded = includes(toCompare, book.id);

  return (
    size(book) > 0 && (
      <div className="relative flex  flex-col rounded-xl bg-slate-100 bg-clip-border text-gray-700 shadow-xl my-3 w-72 mx-auto hover:shadow-2xl">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-clip-border text-gray-700">
          {book.volumeInfo.imageLinks ? (
            <img
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : ""
              }
              alt={book.volumeInfo.title}
              className="w-40 h-48 mx-auto"
              width={160}
              height={208}
            />
          ) : (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
              alt={book.volumeInfo.title}
              className="w-40 h-48 mx-auto"
              width={160}
              height={208}
            />
          )}
        </div>
        <div className="p-6">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased mb-2">
            {book.volumeInfo.title}
          </p>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            Publisher : {book.volumeInfo.publisher}
          </p>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            Author : {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ""}
          </p>
        </div>
        <div
          className={
            "absolute items-center inline-block  text-white text-xs px-2 py-1 right-0 rounded-tr-lg rounded-bl-lg shadow-xl " +
            (book.saleInfo.saleability === "NOT_FOR_SALE"
              ? " bg-red-500"
              : "") +
            (book.saleInfo.saleability === "FOR_SALE" ? " bg-green-700" : "") +
            (book.saleInfo.saleability === "FOR_SALE_AND_RENTAL"
              ? " bg-yellow-600"
              : "")
          }
        >
          {book.saleInfo.saleability}
        </div>
        <div className="p-6">
          {isIncluded ? (
            <button
              className="block w-full rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 absolute bottom-4 right-2 text-teal-700"
              type="button"
              onClick={() => handleRemoveCompare(book.id)}
            >
              Remove
            </button>
          ) : (
            <button
              className="block w-full rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 absolute bottom-4 right-2 text-teal-700"
              type="button"
              onClick={() => handleAddCompare(book.id)}
            >
              Compare
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default BookCard;

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    saleInfo: PropTypes.shape({
      isEbook: PropTypes.bool,
      saleability: PropTypes.string,
    }),
    volumeInfo: PropTypes.shape({
      title: PropTypes.string,
      publisher: PropTypes.string,
      publishedDate: PropTypes.string,
      averageRating: PropTypes.number,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
      authors: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};
