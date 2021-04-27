const router = require("express").Router();

let Task = require("../models/task.model");

// Obtaining all the tasks
router.route("/").get((req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Adding a task
router.route("/add").post((req, res) => {
  const title = req.body.title;
  const summary = req.body.summary;
  const employeesAssigned = req.body.employeesAssigned;
  const startDate = Date.parse(req.body.startDate);
  const deadline = Date.parse(req.body.deadline);

  const newTask = new Task({
    title,
    summary,
    employeesAssigned,
    startDate,
    deadline,
  });

  newTask
    .save()
    .then(() => res.json("Task Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Obtaining a particular task
router.route("/:id").get((req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Deleting a particular task
router.route("/:id").delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Updating a particular task
router.route("/update/:id").post((req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
      task.title = req.body.title;
      task.summary = req.body.summary;
      task.employeesAssigned = req.body.employeesAssigned;
      task.startDate = Date.parse(req.body.startDate);
      task.deadline = Date.parse(req.body.deadline);

      task
        .save()
        .then(() => res.json("Task Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
