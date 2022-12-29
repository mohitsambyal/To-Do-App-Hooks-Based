import React from "react";

function ToDoList(props) {
  const { todo, index } = props;
  return (
    <>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo?.text}{" "}
        <div>
          <button onClick={() => props.completeTodo(index)}>Complete</button>
          <button onClick={() => props.removeTodo(index)}>x</button>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
