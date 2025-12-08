const Task = require('../models/task.model');



// List Tasks
const listTasks = async (req, res, next) => {
try {
const tasks = await Task.find().sort({ createdAt: -1 });
return res.json({ success: true, data: tasks });
} catch (err) {
next(err);
}
};


// Mark Completed
const completeTask = async (req, res, next) => {
try {
const { id } = req.params;
const task = await Task.findById(id);
if (!task) return res.status(404).json({ success: false, message: 'Task not found' });


if (task.completed) return res.status(200).json({ success: true, data: task, message: 'Task already completed' });


task.completed = true;
await task.save();


return res.json({ success: true, data: task, message: 'Task marked completed' });
} catch (err) {
next(err);
}
};


// Delete Task
const deleteTask = async (req, res, next) => {
try {
const { id } = req.params;
const task = await Task.findByIdAndDelete(id);
if (!task) return res.status(404).json({ success: false, message: 'Task not found' });


return res.json({ success: true, message: 'Task deleted' });
} catch (err) {
next(err);
}
};


module.exports = {
createTask,
listTasks,
completeTask,
deleteTask,
};
