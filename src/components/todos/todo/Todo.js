import React, { useContext } from "react";
import { todosContext } from "../../../context/todosContext";

import "./todo.css";

const Todo = ({ id, title, completed, bool }) => {
  const { completedTodoAsMarkHandler, deleteTodoHandler } = useContext(
    todosContext
  );

  const customStyle = {
    textDecoration: completed && "line-through",
  };

  return (
    <div className="todo">
      <input
        type="checkbox"
        id={id}
        checked={completed}
        onChange={() => completedTodoAsMarkHandler(id)}
      />
      <label style={customStyle} htmlFor={id}>
        {" "}
        {title}{" "}
      </label>
      {completed && bool && (
        <i className="fas fa-trash todo-trash" onClick={() => deleteTodoHandler(id)}></i>
      )}
    </div>
  );
};

export default Todo;
