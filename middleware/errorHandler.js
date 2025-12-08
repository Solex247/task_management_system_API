const errorHandler = (err, req, res, next) => {
console.error(err);
if (res.headersSent) return next(err);


// Mongoose validation error
if (err.name === 'ValidationError') {
const messages = Object.values(err.errors).map((e) => e.message);
return res.status(400).json({ success: false, message: messages.join(', ') });
}


return res.status(500).json({ success: false, message: 'Internal Server Error' });
};


module.exports = { errorHandler };
