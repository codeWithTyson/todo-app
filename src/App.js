import React from "react";
import Container from "@material-ui/core/Container";
import "./App.css";
import { TodosContextProvider } from "./context/todosContext";
import Todos from "./components/todos/Todos";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <TodosContextProvider>
        <Container maxWidth="sm">
          <h1 className="todo-title"> #todo </h1>
          <Todos />
          <Footer/>
        </Container>
      </TodosContextProvider>
    </React.Fragment>
  );
}

export default App;
