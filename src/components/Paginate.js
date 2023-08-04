import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import PropTypes from "prop-types";

/**
 * Pagination component
 * changes index in url according to page change
 * used in _app.js to display in all the components
 *
 * @param {number} page
 * @param {Function} handleChange
 *
 * @returns {JSX.Element}
 *
 */

const Paginate = ({ page, handleChange }) => {
  return (
    <Stack spacing={2} className="max-sm:mb-9 py-4">
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        className="my-5"
        color="primary"
      />
    </Stack>
  );
};
export default Paginate;

Paginate.propTypes = {
  page: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
