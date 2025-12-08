


const validateCreateTask = (req, res, next) => {
const { title, due_date } = req.body;


if (!title || typeof title !== 'string' || title.trim() === '') {
return res.status(400).json({ success: false, message: 'Title is required' });
}


if (due_date !== undefined && due_date !== null && due_date !== '') {
const date = new Date(due_date);
if (isNaN(date.getTime())) {
return res.status(400).json({ success: false, message: 'due_date must be a valid date' });
}
}


next();
};


module.exports = { validateCreateTask };
