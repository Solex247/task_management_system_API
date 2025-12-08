require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/task.routes');
const { errorHandler } = require('./middleware/errorHandler');


const app = express();
const PORT = process.env.PORT || 3000;


// connect to DB
connectDB();


// middlewares
app.use(cors());
app.use(express.json());


// routes
app.use('/tasks', taskRoutes);


// health check
app.get('/', (req, res) => res.json({ success: true, message: 'Task Manager API is running' }));


// error handler (should be last middleware)
app.use(errorHandler);


app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
