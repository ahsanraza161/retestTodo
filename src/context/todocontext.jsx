import React, { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "./reduce";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
