import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistedStore, store } from "../store/store";

const Wrapper = ({ children }) => {
  if (typeof window === undefined) {
    return <Provider store={store}>{children}</Provider>;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>{() => children}</PersistGate>
      </Provider>
    );
  }
};

export default Wrapper;
