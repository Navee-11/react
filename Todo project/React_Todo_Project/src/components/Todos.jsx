import React from "react";

function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        const { title, description, completed } = todo;
        return (
          <div>
            <h1>{title}</h1>
            <h1>{description}</h1>
            <button>
              {completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
