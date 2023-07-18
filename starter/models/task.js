const mongoose = require("mongoose");

// Define the schema for a Task document
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide"], // The "name" field is required and must be of type String
  },
  completed: {
    type: Boolean,
    default: false, // The "completed" field is optional and defaults to "false" if not provided
  },
});

// Create a model based on the "taskSchema" and export it
module.exports = mongoose.model("Task", taskSchema);
