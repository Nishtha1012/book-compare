import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { ApolloProvider } from "@apollo/client";
import { client } from "../gql/apolloClient";
import Header from "../components/Header";

import { persistedStore, store } from "../store/store";
import "../../styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * main component that renders all the component
 * defines layouts for components
 *
 * @returns {JSX}
 */

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeError", end);
    router.events.on("routeChangeComplete", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <Header />

          {loading ? (
            <div className="mx-auto flex items-center justify-center mt-5">
              <CircularProgress className="mx-auto" />
            </div>
          ) : (
            <>
              <Component {...pageProps} />
              <ToastContainer />
            </>
          )}
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
