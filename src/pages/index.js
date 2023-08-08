import Head from "next/head";

import { size } from "lodash";

import { client } from "../gql/apolloClient";
import { GET_ALL_BOOKS } from "../gql/queries";

import useIndex from "../talons/useIndex";
import BookCard from "../components/BookCard";
import Paginate from "../components/Paginate";
import Filters from "../components/Filters";

/**
 * This component is used for Listing all books
 * also displays filters dropdown at top and pagination at bottom of page
 * @returns {JSX.Element}
 */

const Home = ({ books }) => {
  const { handleChange, index } = useIndex();
  return (
    <>
      <Head>
        <title>Books | Search</title>
        <meta name="description" content="Books search app" />
      </Head>
      {size(books) > 0 ? (
        <>
          {/**filters */}
          <Filters />

          {/**book list */}
          <div className="grid grid-cols-3 container mx-auto max-md:grid-cols-2 max-sm:grid-cols-1">
            {books.map((book, index) => (
              <BookCard book={book} key={index} />
            ))}
          </div>

          {/**pagination */}
          <div className="flex items-center justify-center ">
            <Paginate page={parseInt(index)} handleChange={handleChange} />
          </div>
        </>
      ) : (
        <p className="text-center">No Books Found!!</p>
      )}
    </>
  );
};

export default Home;

/**
 * function for getting all searched  books using gql for ssr
 * @param {*} context
 * @returns array of books
 */

export async function getServerSideProps(context) {
  const { query } = context;
  if (size(query) > 0) {
    try {
      const { data } = await client.query({
        query: GET_ALL_BOOKS,
        variables: {
          term: query.term ? query.term : "",
          start: parseInt(
            query.index === "1" ? query.index : (query.index - 1) * 10
          ),
          filter: query.filter ? query.filter : "",
        },
      });
      return {
        props: {
          books: data.searchBooks,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        props: {
          books: null,
        },
      };
    }
  } else {
    return {
      props: {
        books: null,
      },
    };
  }
}
