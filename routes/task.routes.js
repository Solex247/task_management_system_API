const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/task.controller');
const { validateCreateTask } = require('../validators/task.validator');


// Create
router.post('/', validateCreateTask, TaskController.createTask);


// List
router.get('/', TaskController.listTasks);


// Mark complete
router.patch('/:id/complete', TaskController.completeTask);


// Delete
router.delete('/:id', TaskController.deleteTask);


module.exports = router;
