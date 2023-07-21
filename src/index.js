import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MainGrid from "./Components/MainGrid";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";
import "./Components/fonts/GlobalStyle.js";

import GlobalStyle from "./Components/fonts/GlobalStyle.js";
ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(
//  <BrowserRouter>
//    <GlobalStyle />
//    <Main />
//  </BrowserRouter>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
