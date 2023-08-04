const { ApolloClient, InMemoryCache } = require("@apollo/client");

//apollo client
export const client = new ApolloClient({
  // uri: "http://localhost:4000/",
  uri: "https://book-compare-server.vercel.app/",
  cache: new InMemoryCache(),
});
