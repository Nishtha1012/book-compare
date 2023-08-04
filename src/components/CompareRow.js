import React from "react";

import { size } from "lodash";

import { useDispatch } from "react-redux";
import { removeFromCompare } from "../store/bookSlice";
import PropTypes from "prop-types";

/**
 * This component is used for displaying individual book row in compare table
 * also provides a button to remove the book from compare
 * Parent component is compare.js
 *
 * @param {object} book
 * @param {string} book.id
 * @param {object} book.saleInfo
 * @param {object} book.saleInfo.listPrice
 * @param {number} book.saleInfo.listPrice.amount
 * @param {object} book.volumeInfo
 * @param {string} book.volumeInfo.title
 * @param {string} book.volumeInfo.publisher
 * @param {number} book.volumeInfo.averageRating
 * @param {object} book.volumeInfo.imageLinks
 * @param {string} book.volumeInfo.imageLinks.thumbnail
 * @param {string[]} book.volumeInfo.categories
 * @param {string[]} book.volumeInfo.authors
 * @param {number} book.volumeInfo.pageCount
 *
 *
 * @returns {JSX.Element}
 */

const CompareRow = ({ book }) => {
  const dispatch = useDispatch();
  return (
    size(book) > 0 && (
      <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <td>
          <img
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : "No Image Found"
            }
            width="100px"
            alt={book.volumeInfo.title}
          />
        </td>
        <td className="px-6 py-4">{book.volumeInfo.title}</td>
        <td className="px-6 py-4">
          {book.volumeInfo.pageCount ? book.volumeInfo.pageCount : "-"}
        </td>
        <td className="px-6 py-4">
          {book.volumeInfo.authors[0] ? book.volumeInfo.authors[0] : "-"}
        </td>

        <td className="px-6 py-4">
          {book.volumeInfo.publisher ? book.volumeInfo.publisher : "-"}
        </td>

        <td className="px-6 py-4">
          {book.volumeInfo.averageRating
            ? book.volumeInfo.averageRating
            : "No Ratings"}
        </td>

        <td className="px-6 py-4">
          {book.volumeInfo.categories ? book.volumeInfo.categories[0] : "-"}
        </td>

        <td className="px-6 py-4">
          {book.saleInfo.listPrice
            ? " Rs. " + book.saleInfo.listPrice.amount
            : "Not For Sale"}
        </td>

        <td className="px-6 py-4">
          <span
            className="font-medium cursor-pointer text-teal-600 dark:text-teal-500 hover:underline"
            onClick={() => dispatch(removeFromCompare(book.id))}
          >
            Remove
          </span>
        </td>
      </tr>
    )
  );
};

export default CompareRow;

CompareRow.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    saleInfo: PropTypes.shape({
      listPrice: PropTypes.shape({
        amount: PropTypes.number,
      }),
    }),
    volumeInfo: PropTypes.shape({
      title: PropTypes.string,
      publisher: PropTypes.string,
      averageRating: PropTypes.number,
      pageCount: PropTypes.number,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
      authors: PropTypes.arrayOf(PropTypes.string),
      categories: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};
