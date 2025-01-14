import React, { useState } from "react";

function CreateTodo({ count, setCount }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
        onClick={() =>
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              //To pass the data in JSON format
              title: title,
              description: desc,
            }),
            headers: {
              "Content-type": "application/json", //Check and executes only when the body we are passing is JSON
            },
          }).then(async (res) => {
            const json = res.json();
            alert("Todo Added");
            setCount((count) => count + 1);
          })
        }
      >
        Add Todo
      </button>
    </>
  );
}

export default CreateTodo;
