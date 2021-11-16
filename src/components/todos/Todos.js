import React, { useState, useReducer } from "react";
import TodoItem from "./TodoItem";

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function reducer(todos, action) {
  switch (action.type) {
    case "add-todo":
      return [...todos, addTodo(action.payload.text)];
    case "flip":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case "delete":
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: "add-todo", payload: { text: text } });
    setText("");
  }

  // console.log(todos);

  return (
    <div className="container pt-4">
      <h1 className="fixed-top bg-warning text-center pt-2 pb-2 fw-bold">
        Simple TodoApp
      </h1>

      <div className="row justify-content-center pb-5">
        <div className="col-6 mt-5 bg-warning pb-3 bg-gradient bg-opacity-75 bg-gradient rounded shadow ">
          <div className="mt-3 mb-3">
            <form
              className="needs-validation"
              onSubmit={handleSubmit}
              novalidate
            >
              <input
                className="w-75"
                type="text"
                value={text}
                required
                onChange={(event) => setText(event.target.value)}
              />
              <button type="Submit" className="btn btn-primary fw-bold ms-3">
                Add Todo
              </button>
            </form>
          </div>
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
          })}
        </div>
      </div>
      <footer className="fixed-bottom bg-warning text-center text-dark fw-bold mt-4">
        <div className="text-center p-3">© 2020 Copyright: Griffin M. Mumu</div>
      </footer>
    </div>
  );
}

export default Todos;
