import React, { useState } from "react";
import Todo from "./ToDoList";

function ToDoHook() {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false },
  ]);

  const [value, setValue] = useState("");
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="app">
        <div className="todo-list">
          {todos && todos.length > 0 ? (
            todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))
          ) : (
            <>
              <div className="todo">Not Found</div>
            </>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Enter text here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}

export default ToDoHook;
