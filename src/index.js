import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import state, { addPost } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

// let dialogs = [
//   { id: 1, name: "Алексей" },
//   { id: 2, name: "Степан" },
//   { id: 3, name: "Василий" },
//   { id: 4, name: "Инакентий" },
//   { id: 5, name: "Фёдор" },
// ];
// let messages = [
//   { id: 1, message: "Привет" },
//   { id: 2, message: "Как дела?" },
//   { id: 3, message: "Что делаешь?" },
//   { id: 4, message: "Пойдём завтра гулять?" },
//   { id: 5, message: "Во сколько?" },
// ];

// let posts = [
//   { id: 1, message: "Hi, i`m trueing project on React", likeCount: "4" },
//   { id: 2, message: "Good luck, man", likeCount: "6" },
//   { id: 3, message: "You can do this, dude", likeCount: "8" },
// ];

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
