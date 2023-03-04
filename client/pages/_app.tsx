import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
export default function App({ Component, pageProps }: AppProps) {
  const store = createStore(reducers, compose(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      {" "}
      <Component {...pageProps} />
    </Provider>
  );
}
