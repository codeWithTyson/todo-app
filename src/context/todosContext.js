import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const todosContext = createContext();

export const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    
    if(localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const newTodoHandler = (title) => {
    return setTodos([
      ...todos,
      { id: uuidv4(), title: title, completed: false },
    ]);
  };

  const completedTodoAsMarkHandler = (id) => {
    return setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodoHandler = (id) => {
    return setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAllActiveTodosHandler = () => {
    return setTodos(todos.filter((todo) => !todo.completed));
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <todosContext.Provider
      value={{
        todos,
        activeTodos,
        completedTodos,
        deleteTodoHandler,
        newTodoHandler,
        completedTodoAsMarkHandler,
        deleteAllActiveTodosHandler,
      }}
    >
      {props.children}
    </todosContext.Provider>
  );
};
