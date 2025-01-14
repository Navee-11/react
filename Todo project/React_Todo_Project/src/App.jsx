import React, { useState, useEffect } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect is executed");
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        const todo = data.data;
        setTodos(todo);
      })
      .catch((error) => console.error("Error fetching todos:", error));
    console.log("Count Value", count);
  }, [count]);

  return (
    <>
      <CreateTodo count={count} setCount={setCount} />
      <Todos todos={todos} />
    </>
  );
}

export default App;
