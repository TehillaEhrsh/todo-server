const express = require("express");
const router = express.Router();
const todoService = require("./todo.service");

router.get("/", async (req, res) => {
  try {
    const todo = await todoService.read(req.body);
    console.log(todo);
    if (!todo) throw "not found todo"
     res.send(todo);
  } catch (err) {
    res.status(402).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    res.send( await todoService.createTodo(req.body));
  } catch (err) {
    res.status(402).send(err);
  }
});
router.delete("/all", async (req, res) => {
  try {
    res.send( await todoService.delAll(req.body));
  } catch (err) {
    res.status(402).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("del_id",id);
    res.send(await todoService.delOne(id));
  } catch (err) {
    res.status(402).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id",id);
    console.log("body",req.body);
    res.send(await todoService.updateOne(id, req.body));
  } catch (err) {
    res.status(402).send(err);
  }
});
router.put("/all", async (req, res) => {
  try {
    res.send( await todoService.updateMany(req.body))
  } catch (err) {
    res.status(402).send(err);
  }
});

module.exports= router