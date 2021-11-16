import React from "react";

function TodoItem({ todo, dispatch }) {
  return (
    <div className="container d-flex flex-row justify-content-between mb-2">
      <div className="align-items-start">
        <input
          className="me-2"
          type="checkbox"
          onChange={() => dispatch({ type: "flip", payload: { id: todo.id } })}
        />

        <span
          className="fs-4"
          style={{ textDecoration: todo.complete ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      </div>

      <button
        className="btn-danger rounded me-4"
        onClick={() => dispatch({ type: "delete", payload: { id: todo.id } })}
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default TodoItem;
