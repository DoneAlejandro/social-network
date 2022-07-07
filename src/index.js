import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// let renderEntireTree = () => {
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App
        // store={store}
        // state={state}
        // dispatch={store.dispatch.bind(store)}
        />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
// };
// Временно закомментил ибо буду переделывать
// renderEntireTree();

// store.subscribe(() => {
//   //   let state = store.getState();
//   renderEntireTree();
// });
window.store = store;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
