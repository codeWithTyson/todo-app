import React, { useState, useContext } from "react";
import { todosContext } from "../../../context/todosContext";
import "./newTodo.css";

const NewTodo = () => {
  const [todoText, setTodoText] = useState("");

  const { newTodoHandler } = useContext(todosContext);

  const newTodo = (event) => {
    event.preventDefault();

    newTodoHandler(todoText);

    setTodoText("");
  };

  return (
    <form onSubmit={newTodo}>
      <input
        type="text"
        required
        placeholder="add details"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default NewTodo;
