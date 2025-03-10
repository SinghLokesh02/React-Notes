import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
