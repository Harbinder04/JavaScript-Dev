const express = require('express');
const {createTodo} = require('./types.js');
const {todo} = require('../db/index.js');
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo",async (req, res)=>{
  const createPayload = req.body;
  const parsedload = createTodo.safeParse(createPayload);
  if(!parsedload.success){
     res.status(411).json({
        msg: "Invalid Request",
    });
    return;
  }

  //put in mongo db
  try{
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed : false,
  });
}catch(err){
   return res.send("unable to place in datatbase");
}

  res.status(200).json({
    msg : "todo created successfully",
  });


});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find({});
    if (todos.length > 0) {
      return res.status(200).json({ todos });
    } else {
      return res.status(404).json({ message: "No todos found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.put("/completed", async (req, res)=>{
    const updatePayload = req.body;
    const parsePayload = createTodo.safeParse(updatePayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg: "You send the wrong input"
        });
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    });
    res.status(200).json("completed successfully");
});

app.listen(3000, ()=>{
  console.log("successfully open")
});