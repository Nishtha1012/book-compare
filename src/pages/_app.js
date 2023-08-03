import { ApolloProvider } from "@apollo/client";
import { PersistGate } from "redux-persist/integration/react";
import "../../styles/globals.css";
import Header from "../components/Header";
import { client } from "../gql/apolloClient";
import { persistedStore, wrapper } from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <PersistGate persistor={persistedStore}>
        <Header />
        <Component {...pageProps} />
      </PersistGate>
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
