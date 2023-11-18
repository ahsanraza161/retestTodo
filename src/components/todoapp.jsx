import React, { useState } from "react";
import { useState as useTodoState } from "../context/state";
import { ActionTypes } from "../context/reduce";

const TodoApp = () => {
  const { todos, dispatch } = useTodoState();
  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      if (editTodoId !== null) {
        // If editTodoId is not null, update the existing todo
        dispatch({
          type: ActionTypes.UPDATE_TODO,
          payload: {
            id: editTodoId,
            text: newTodo,
            completed: todos.find((todo) => todo.id === editTodoId).completed,
          },
        });
        setEditTodoId(null);
      } else {
        // If editTodoId is null, add a new todo
        dispatch({
          type: ActionTypes.ADD_TODO,
          payload: {
            id: Date.now(),
            text: newTodo,
            completed: false,
          },
        });
      }

      setNewTodo("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: ActionTypes.UPDATE_TODO,
      payload: {
        id,
        text: todos.find((todo) => todo.id === id).text,
        completed: !todos.find((todo) => todo.id === id).completed,
      },
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: ActionTypes.DELETE_TODO,
      payload: id,
    });
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setNewTodo(todoToEdit.text);
    setEditTodoId(id);
  };

  return (
    <div className="mainbox">
        <div className="inputbox"> 
        <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>
        {editTodoId !== null ? "Update Todo" : "Add Todo"}
      </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
