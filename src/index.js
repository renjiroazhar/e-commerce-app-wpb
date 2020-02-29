/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "./configureStore";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes";

import "./index.css";

render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Routes />
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
