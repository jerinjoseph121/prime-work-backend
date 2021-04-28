const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    employeesAssigned: {
      type: Array,
      items: {
        type: String,
        required: true,
      },
      required: true,
    },
    startDate: { type: Date, required: true },
    deadline: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Tasks", taskSchema);

module.exports = Task;
