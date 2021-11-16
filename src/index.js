import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Todos from "./components/todos/Todos";

ReactDOM.render(
  <BrowserRouter>
    <Todos />
  </BrowserRouter>,
  document.getElementById("root")
);
