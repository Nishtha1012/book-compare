import { useState } from "react";
import { useRouter } from "next/router";

/**
 * A custom hook to handle pagination functionality.
 * @returns {Object} An object containing index-related state and functions.
 */

const useIndex = () => {
  const router = useRouter();

  // Extract the 'index' and 'term' values from the router query
  const { index } = router.query;
  const { term } = router.query;

  // State to store the current page index
  const [page, setPage] = useState(1);

  /**
   * Function to handle the page index change.
   * This function is called when the user navigates to a new page.
   * It updates the router query with the new index and term values.
   * It also updates the 'page' state with the new index value.
   * @param {Object} event - The event object containing information about the page change.
   * @param {number} value - The new page index value.
   */
  const handleChange = (event, value) => {
    console.log(value);

    // Update the 'page' state with the new index value
    setPage(value);

    // Update the router query with the new index and term values
    router.push({
      pathname: "/",
      query: { term: term, index: value },
    });
  };

  // Return an object containing the index-related state and functions
  return {
    index,
    handleChange,
  };
};

export default useIndex;
