# Task Manager API


Simple task management REST API built with Express and MongoDB (Mongoose).


## Features


- Create Task - `POST /tasks` (fields: `title`, `description`, `due_date`)
- List Tasks - `GET /tasks`
- Mark Task as Completed - `PATCH /tasks/{id}/complete`
- Delete Task - `DELETE /tasks/{id}`


Validation: `title` is required. `due_date` must be a valid date if provided.


## Requirements


- Node >= 14
- npm
- MongoDB (local or cloud URI)


## Install and run locally


1. Clone or copy the project files into a folder.
2. `cd` into the folder and run:


```bash
npm install