import React from "react";
import { size } from "lodash";
import { useDispatch } from "react-redux";
import { removeFromCompare } from "../store/bookSlice";
import PropTypes from "prop-types";
import Image from "next/image";

/**
 * CompareRow Component
 *
 * Displays an individual book row in the compare table and provides a button to remove the book from compare.
 *
 * @param {object} book - The book object to display in the row.
 * @param {string} book.id - The unique identifier of the book.
 * @param {object} book.saleInfo - Information about the book's sale.
 * @param {object} book.saleInfo.listPrice - The list price of the book.
 * @param {number} book.saleInfo.listPrice.amount - The amount of the list price.
 * @param {object} book.volumeInfo - Information about the book's volume.
 * @param {string} book.volumeInfo.title - The title of the book.
 * @param {string} book.volumeInfo.publisher - The publisher of the book.
 * @param {number} book.volumeInfo.averageRating - The average rating of the book.
 * @param {object} book.volumeInfo.imageLinks - Links to images of the book.
 * @param {string} book.volumeInfo.imageLinks.thumbnail - The URL of the book's thumbnail image.
 * @param {string[]} book.volumeInfo.categories - Categories or genres of the book.
 * @param {string[]} book.volumeInfo.authors - Authors of the book.
 * @param {number} book.volumeInfo.pageCount - Number of pages in the book.
 *
 * @returns {JSX.Element} - The JSX element representing the CompareRow component.
 */
const CompareRow = ({ book }) => {
  const dispatch = useDispatch();

  // Render the table row only if the book object is not empty
  return (
    size(book) > 0 && (
      <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <td>
          {/* Display book thumbnail image or a default image */}
          {book.volumeInfo.imageLinks ? (
            <Image
              src={book.volumeInfo.imageLinks.thumbnail || ""}
              alt={book.volumeInfo.title}
              width={250}
              height={250}
              className="object-contain w-full h-full"
              priority
            />
          ) : (
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
              alt={book.volumeInfo.title}
              width={250}
              height={250}
              className="object-contain w-full h-full"
              priority
            />
          )}
        </td>
        {/* Display book title */}
        <td className="px-6 py-4">{book.volumeInfo.title}</td>
        {/* Display page count */}
        <td className="px-6 py-4">
          {book.volumeInfo.pageCount ? book.volumeInfo.pageCount : "-"}
        </td>
        {/* Display author */}
        <td className="px-6 py-4">
          {book.volumeInfo.authors[0] ? book.volumeInfo.authors[0] : "-"}
        </td>
        {/* Display publisher */}
        <td className="px-6 py-4">
          {book.volumeInfo.publisher ? book.volumeInfo.publisher : "-"}
        </td>
        {/* Display average rating */}
        <td className="px-6 py-4">
          {book.volumeInfo.averageRating
            ? book.volumeInfo.averageRating
            : "No Ratings"}
        </td>
        {/* Display category */}
        <td className="px-6 py-4">
          {book.volumeInfo.categories ? book.volumeInfo.categories[0] : "-"}
        </td>
        {/* Display list price or "Not For Sale" */}
        <td className="px-6 py-4">
          {book.saleInfo.listPrice
            ? " Rs. " + book.saleInfo.listPrice.amount
            : "Not For Sale"}
        </td>
        {/* Display 'Remove' button */}
        <td className="px-6 py-4">
          <span
            className="font-medium cursor-pointer text-teal-700 dark:text-teal-500 hover:underline"
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

// PropTypes for type checking and documenting the expected prop structure
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
