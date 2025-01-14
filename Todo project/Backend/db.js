/* 
*Todo{
    title:string;
    description:string,
    completed:boolean
}
*/
const mongoose = require("mongoose");
//mongodb+srv://naveenkumarr10692:EngNav07@cluster0.sb9gk.mongodb.net/
mongoose.connect(
  "mongodb+srv://naveenkumarr10692:EngNav07@cluster0.sb9gk.mongodb.net/todos" //This shouldn't be hard coded before of security vulnerability
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo: todo,
};
