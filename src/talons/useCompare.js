import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useLazyQuery } from "@apollo/client";

import { useRouter } from "next/router";

import { GET_BOOK } from "../gql/queries";
import { createChainedFunction } from "@mui/material";

/**
 * A custom hook to handle book comparison functionality.
 * @returns {object}
 * - {Array} An array of object containing compared books, router, and dispatch function.
 * - instance of router
 */

const useCompare = () => {
  // Get the list of books to compare from the Redux store
  const toCompare = useSelector((state) => state.book.compareBooks);

  // Use the useLazyQuery hook to fetch book data from the GraphQL server
  const [fetchBooks, { data, error, loading }] = useLazyQuery(GET_BOOK);

  // State to store the compared books
  const [compared, setcompared] = useState([]);

  // Get the Next.js router instance
  const router = useRouter();

  /**
   * Function to get details of selected books to compare.
   * This function will be called when the list of books to compare changes.
   * It fetches book data for the selected books and updates the 'compared' state.
   */
  const compareBooks = useCallback(async () => {
    const { data } = await fetchBooks({
      variables: {
        id: toCompare,
      },
    });
    // Update the 'compared' state with the fetched book data
    setcompared(data?.bookByID);
  }, [toCompare]);

  // Call the compareBooks function whenever the list of books to compare changes
  useEffect(() => {
    compareBooks();
  }, [toCompare]);

  // Return an array containing the compared books, router
  return {
    compared,
    router,
    loading,
    error,
  };
};

export default useCompare;
