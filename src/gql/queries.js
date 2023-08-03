const { gql } = require("@apollo/client");

const GET_ALL_BOOKS = gql`
  query Query($term: String!, $start: Int!, $filter: String) {
    searchBooks(term: $term, start: $start, filter: $filter) {
      id
      volumeInfo {
        title
        averageRating
        publishedDate
        publisher
        authors
        imageLinks {
          thumbnail
        }
      }
      saleInfo {
        saleability
        isEbook
      }
    }
  }
`;

export { GET_ALL_BOOKS };
