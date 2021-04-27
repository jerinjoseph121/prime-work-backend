const router = require("express").Router();

let Employee = require("../models/employee.model");

// Obtaining all the employees
router.route("/").get((req, res) => {
  Employee.find()
    .then((employees) => res.json(employees))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Adding an employee
router.route("/add").post((req, res) => {
  const totalTask = req.body.tasks.totalTask;
  const assignedTask = req.body.tasks.assignedTask;
  const completedTask = req.body.tasks.completedTask;

  const newTasks = {
    totalTask,
    assignedTask,
    completedTask,
  };

  const name = req.body.name;
  const post = req.body.post;
  const tasks = newTasks;
  const salary = req.body.salary;
  const address = req.body.address;

  const newEmployee = new Employee({
    name,
    post,
    tasks,
    salary,
    address,
  });

  newEmployee
    .save()
    .then(() => res.json("Employee Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Obtaining a particular employee
router.route("/:id").get((req, res) => {
  Employee.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Deleting a particular employee
router.route("/:id").delete((req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json("Employee Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Updating a particular employee
router.route("/update/:id").post((req, res) => {
  Employee.findById(req.params.id)
    .then((employee) => {
      employee.name = req.body.name;
      employee.post = req.body.post;
      employee.tasks = req.body.tasks;
      employee.salary = req.body.salary;
      employee.address = req.body.address;

      employee
        .save()
        .then(() => res.json("Employee Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
