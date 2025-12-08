# Task Manager API


Simple task management REST API built with NodeJs, Express and MongoDB (Mongoose).


## Features


- Create Task - `POST /tasks` (fields: `title`, `description`, `due_date`)
- List Tasks - `GET /tasks`
- Mark Task as Completed - `PATCH /tasks/{id}/complete`
- Delete Task - `DELETE /tasks/{id}`


Validation: `title` is required. `due_date` must be a valid date if provided.

## What it does

- Create a new task with a title, description, and due date.
- See a list of all tasks.
- Mark tasks as completed.
- Delete tasks.

---

## Requirements

- Node.js (version 14 or higher)
- npm
- MongoDB (running locally or using a cloud database like MongoDB Atlas)

---

## How to set it up

1. **Download the project**  
   Clone the repo or download it as a ZIP and unzip it.

2. **Go to the project folder**  

```bash
cd task-manager
````

3. **Install dependencies**

```bash
npm install
```

4. **Create a `.env` file**
   Copy from `.env.example` and update if needed:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/task_manager_db
```

5. **Start the server**

For development (with auto reload):

```bash
npm run dev
```

For normal start:

```bash
npm start
```

The server will run on `http://localhost:3000`.

---

## How to use the API

* **Create a task**

```bash
POST /tasks
{
  "title": "Buy groceries",
  "description": "Milk, eggs",
  "due_date": "2025-12-15"
}
```

* **List all tasks**

```bash
GET /tasks
```

* **Mark a task as completed**

```bash
PATCH /tasks/<TASK_ID>/complete
```

* **Delete a task**

```bash
DELETE /tasks/<TASK_ID>
```

---

## Notes

* `title` is required for every task.
* `due_date` must be a valid date if provided.
* You can test the API using **Postman**, **HTTPie** **curl**, or your browser (for GET requests).
