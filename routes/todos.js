var express = require("express");
var router = express.Router();
var TodoModel = require("../models/TodoModel.js");

// GET - hämta alla poster
router.get("/", async (req, res, next) => {
  try {
    const todos = await TodoModel.find();
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

// POST - skapa ny todo
router.post("/", async (req, res, next) => {
  try {
    const todo = await TodoModel.create(req.body); // skapar dokument från request-body
    res.status(201).json(todo); // 201 Created + ny post
  } catch (err) {
    next(err);
  }
});

// PATCH - toggla eller uppdatera fält
router.patch("/:id", async (req, res, next) => {
  try {
    const updated = await TodoModel.findByIdAndUpdate(
      req.params.id, // id från URL
      req.body, // fält att uppdatera
      { new: true, runValidators: true } // returnera NYA dokumentet
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE - ta bort en post
router.delete("/:id", async (req, res, next) => {
  try {
    await TodoModel.findByIdAndDelete(req.params.id);
    res.sendStatus(204); // 204 No Content
  } catch (err) {
    next(err);
  }
});

module.exports = router; // exporterar routen
