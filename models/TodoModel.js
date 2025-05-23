/**
 *
 * https://mongoosejs.com/docs/guide.html
 *
 */

var mongoose = require("mongoose");

var TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    done: { type: Boolean, default: false },
  },
  { collection: "todos", timestamps: true }
);

module.exports = mongoose.model("TodoModel", TodoSchema);
