import React from "react";
import './App.css'
import TodoApp from "./components/todoapp";
import { TodoProvider } from "./context/todocontext";

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;
