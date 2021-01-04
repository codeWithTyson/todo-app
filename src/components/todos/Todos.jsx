import React, { useState, useContext } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import TabPanel from "../TabPanel";

import "./todos.css";
import NewTodo from "./new-todo/NewTodo";
import { todosContext } from "../../context/todosContext";
import Todo from "./todo/Todo";

const Todos = () => {
  const [value, setValue] = useState(0);
  const {
    todos,
    activeTodos,
    completedTodos,
    deleteAllActiveTodosHandler,
  } = useContext(todosContext);

  const handleChange = (event, newValue) => {
    return setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { background: "#2F80ED" } }}
        >
          <Tab label="all" />
          <Tab label="active" />
          <Tab label="completed" />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <NewTodo />
        {todos.length ? (
          todos.map((todo, index) => <Todo {...todo} key={index} />)
        ) : (
          <p> No todos found.</p>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NewTodo />
        {activeTodos.length ? (
          activeTodos.map((todo, index) => <Todo {...todo} key={index} />)
        ) : (
          <p> No active Todos Found.</p>
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {completedTodos.length ? (
          <div>
            {completedTodos.map((todo, index) => (
              <Todo {...todo} key={index} bool="true" />
            ))}
            {completedTodos.length > 1 && (
              <button className="del-btn" onClick={deleteAllActiveTodosHandler}>
                <i className="fas fa-trash"></i> Delete all
              </button>
            )}
          </div>
        ) : (
          <div>
            <p> Completed todos not Found.</p>
          </div>
        )}
      </TabPanel>
    </div>
  );
};

export default Todos;
