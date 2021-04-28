const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeTaskDetailsSchema = new Schema({
  totalTask: {
    type: Number,
    required: true,
  },
  assignedTask: {
    type: Number,
    required: true,
  },
  completedTask: {
    type: Number,
    require: true,
  },
});

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    post: {
      type: String,
      required: true,
    },
    tasks: employeeTaskDetailsSchema,
    salary: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employees", employeeSchema);

module.exports = Employee;
