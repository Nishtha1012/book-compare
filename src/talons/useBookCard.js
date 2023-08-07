import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCompare, removeFromCompare } from "../store/bookSlice";

/**
 * A custom hook to handle book comparison functionality.
 * @returns {Array} toCompare -  An array containing ids of books to compare .
 * @returns {Function} handleRemoveCompare - function to remove id in to compare array
 * @returns {Function} handleAddCompare - function to add id in to compare array
 */

const useBookCard = () => {
  const dispatch = useDispatch();

  // Get the list of books to compare from the Redux store
  const toCompare = useSelector((state) => state.book.compareBooks);

  //function to add id in to compare array
  const handleAddCompare = (id) => {
    dispatch(addToCompare(id));
    toast.success("Book added to compare");
  };

  // function to remove id in to compare array
  const handleRemoveCompare = (id) => {
    dispatch(removeFromCompare(id));
    toast.success("Book removed from compare");
  };

  // Return an array containing the compared books ids and add and remove id in array
  return {
    toCompare,
    handleRemoveCompare,
    handleAddCompare,
  };
};

export default useBookCard;
