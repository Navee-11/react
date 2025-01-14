//Basic express boilerplate
//Middleware

const express = require("express");
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.get("/todos", async (req, res) => {
  const data = await todo.find({}); //If we are using await it will return a promise
  res.json({ data });
});
app.post("/todos", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  //put it in mongodb
  try {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
  } catch (err) {
    console.log(err.message);
  }
  res.json({
    msg: "Todo Created",
  });
});
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    { _id: req.body.id },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as complete",
  });
});

app.listen(port, () => console.log(`Server is up and running at ${port}`));
