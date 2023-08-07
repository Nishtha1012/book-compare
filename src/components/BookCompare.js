import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCompare } from "../store/bookSlice";

const BookCompare = ({ books }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full overflow-scroll">
      <table className="container text-sm text-left text-gray-500 dark:text-gray-400 ">
        <tbody>
          <tr>
            <td className="px-6 py-3 font-bold sticky left-0 cursor-pointer text-teal-700 bg-teal-50 dark:bg-teal-700 dark:text-teal-400">
              Image
            </td>
            {books.map((book) => (
              <td key={book.id} className="px-6 py-3">
                <img
                  src={book.volumeInfo.imageLinks.thumbnail || ""}
                  width="100px"
                  alt={book.volumeInfo.title}
                />
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-3 font-bold sticky left-0 cursor-pointer text-teal-700 bg-teal-50 dark:bg-teal-700 dark:text-teal-400">
              Title
            </td>
            {books.map((book) => (
              <td key={book.id} className="px-6 py-3">
                {book.volumeInfo.title ? book.volumeInfo.title : "-"}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-6 py-3 sticky left-0  font-bold cursor-pointer text-teal-700 bg-teal-50 dark:bg-teal-700 dark:text-teal-400">
              Authors
            </td>
            {books.map((book) => (
              <td key={book.id} className="px-6 py-3">
                {book.volumeInfo.authors[0] ? book.volumeInfo.authors[0] : "-"}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-6  py-3 sticky left-0  font-bold cursor-pointer text-teal-700 bg-teal-50 dark:bg-teal-700 dark:text-teal-400">
              Categories
            </td>
            {books.map((book) => (
              <td key={book.id} className="px-6 py-3">
                {book.volumeInfo.categories
                  ? book.volumeInfo.categories[0]
                  : "-"}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-6 py-3 sticky left-0  font-bold cursor-pointer text-teal-700 bg-teal-50 dark:bg-teal-700 dark:text-teal-400">
              Publisher
            </td>
            {books.map((book) => (
              <td key={book.id} className="px-6 py-3">
                {book.volumeInfo.publisher ? book.volumeInfo.publisher : "-"}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-6 py-3 sticky left-0  font-bold cursor-pointer text-teal-700 bg-teal-50 dark:bg-teal-700 dark:text-teal-400">
              Page
            </td>
            {books.map((book) => (
              <td key={book.id} className="px-6 py-3">
                {book.volumeInfo.pageCount ? book.volumeInfo.pageCount : "-"}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-6 py-3 sticky left-0  font-bold cursor-pointer text-teal-700 bg-teal-50 dark:bg-teal-700 dark:text-teal-400">
              Rating
            </td>
            {books.map((book) => (
              <td key={book.id} className="px-6 py-3">
                {book.volumeInfo.averageRating
                  ? book.volumeInfo.averageRating
                  : "-"}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-6 py-3 sticky left-0  font-bold cursor-pointer text-teal-700 bg-teal-50 dark:bg-teal-700 dark:text-teal-400">
              Price
            </td>
            {books.map((book) => (
              <td className="px-6 py-4">
                {book.saleInfo.listPrice
                  ? " Rs. " + book.saleInfo.listPrice.amount
                  : "Not For Sale"}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-6 py-3 sticky left-0  font-bold cursor-pointer text-teal-700 uppercase bg-teal-50 dark:bg-teal-700 dark:text-teal-400">
              Actions
            </td>
            {books.map((book) => (
              <td
                key={book.id}
                onClick={() => dispatch(removeFromCompare(book.id))}
                className="px-6 py-3 font-base cursor-pointer text-teal-700 uppercase bg-teal-50 dark:bg-teal-700 dark:text-teal-400"
              >
                Remove
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookCompare;
