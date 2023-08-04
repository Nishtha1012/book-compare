import { useRouter } from "next/router";
import { useState } from "react";

/**
 * A custom hook to handle filtering functionality.
 * @returns {Object} An object containing filter-related state and functions.
 */

const useFilter = () => {
  // State to control the visibility of the filter
  const [showfilter, setshowfilter] = useState(false);

  // State to store the selected filter
  const [filters, setfilter] = useState();

  // Get the Next.js router instance
  const router = useRouter();

  // Extract the 'term' and 'filter' values from the router query
  const { term } = router.query;
  const { filter } = router.query;

  /**
   * Function to handle the filter change.
   * This function is called when a new filter option is selected.
   * It updates the router query with the new filter and term values.
   * It also sets the selected filter in the 'filters' state and hides the filter UI.
   * @param {Object} e - The event object containing information about the filter change.
   */

  const handleFilterChange = (e) => {
    console.log(e.target.id);

    // Update the router query with the selected filter and term values
    router.push({
      pathname: "/",
      query: { term: term, index: 1, filter: e.target.id },
    });

    // Set the selected filter in the 'filters' state
    setfilter(e.target.id);

    // Hide the filter UI
    setshowfilter(false);
  };

  /**
   * Function to clear the current filter.
   * This function is called when the user wants to remove the applied filter.
   * It updates the router query to remove the filter parameter.
   * It also clears the 'filters' state.
   */
  const clearfilter = () => {
    // Update the router query to remove the 'filter' parameter
    router.push({
      pathname: "/",
      query: { term: term, index: 1 },
    });

    // Clear the 'filters' state
    setfilter();
  };

  // Return an object containing the filter-related state and functions
  return {
    showfilter,
    setshowfilter,
    handleFilterChange,
    filter,
    clearfilter,
  };
};

export default useFilter;
