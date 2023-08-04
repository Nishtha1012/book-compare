import React from "react";
import useSearch from "../talons/useSearch";

/**
 * SearchBar component contains input box for adding search term and a search button
 * *used in Header.js component
 *
 * @returns {JSX.Element}
 *
 */

const SearchBar = () => {
  {
    /**
  form handling functions from talon
*/
  }
  const { register, handleSubmit, onSubmit } = useSearch();
  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          {/**Input box */}
          <input
            type="text"
            {...register("term")}
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent outline-none px-3  focus:bg-slate-100 text-teal-700"
            placeholder="Search Books..."
          />

          {/**Search Button*/}
          <button
            className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary hover:text-teal-700 hover:bg-slate-100"
            type="submit"
            id="button-addon3"
            data-te-ripple-init
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
