import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

/**
 * A custom hook to handle search functionality.
 * @returns {Object} An object containing form-related state and functions.
 */

const useSearch = () => {
  // Get the form methods from react-hook-form
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  /**
   * Function to handle form submission.
   * This function is called when the user submits the search form.
   * It logs the form data to the console, sets the page index to 1,
   * and updates the router query with the search term and page index.
   * @param {Object} data - The form data containing the search term.
   */

  const onSubmit = (data) => {
    console.log(data);

    // Set the page index to 1
    const page = 1;

    // Update the router query with the search term and page index
    router.push({ pathname: "/", query: { term: data.term, index: page } });
  };

  // Return an object containing the form-related state and functions
  return {
    register,
    handleSubmit,
    onSubmit,
  };
};

export default useSearch;
