import { useContext } from "react";
import { TodoContext } from "./todocontext";

export const useState = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useState must be used within a TodoProvider");
  }
  return context;
};
