const { gql } = require("@apollo/client");

/**Query for getting all searched books */
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

/**Query for getting all books to compare */
const GET_BOOK = gql`
  query BookByID($id: [String]!) {
    bookByID(id: $id) {
      id
      volumeInfo {
        title
        description
        publisher
        authors
        publishedDate
        pageCount
        categories
        averageRating
        contentVersion
        language
        imageLinks {
          thumbnail
        }
      }
      saleInfo {
        saleability
        isEbook
        listPrice {
          amount
        }
      }
    }
  }
`;
export { GET_ALL_BOOKS, GET_BOOK };
