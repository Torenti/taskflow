# TaskFlow

TaskFlow is a simple task management application built with React. It helps users organize their daily activities, manage tasks, and track their progress.

The project was developed as a frontend portfolio project to practice modern frontend development with React and JavaScript.

# Project status

Core functionality implemented.

# Features

* Task Management - create, edit, and delete tasks.
* Task Statuses - organize tasks into three columns: To Do, In Progress and Done.
* Priority Management - assign Low, Medium or High priority to tasks.
* Search - find tasks by title.
* Filtering - filter tasks by status and priority.
* Sorting - sort tasks by creation date.
* Local Storage - automatically save tasks and restore them after page reloads.
* Responsive Layout - interface adapts to different screen sizes.

# Technologies
* JavaScript 
* React 
* CSS
* Vite

# Getting Started

Clone the repository:
```bash
git clone https://github.com/Torenti/taskflow.git
```

Navigate to the project directory:
```bash
cd taskflow
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

# Available Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run lint` | Runs ESLint to check the code |

# Project Structure
```bash
taskflow/
---public/
------favicon.svg
---src/
------components/
---------Header.jsx
---------Header.css
---------Board.jsx
---------Board.css
---------SearchSystem.jsx
---------SearchSystem.css
---------TaskAdd.jsx
---------TaskAdd.css
---------TaskCard.jsx
---------TaskCard.css
---------TaskDetails.jsx
---------TaskDetails.css
------App.jsx
------App.css
------main.jsx
------index.css
---index.html
---package-lock.json
---package.json
---README.md
```

# Data Persistence
TaskFlow uses the browser's Local Storage API to persist tasks between sessions.

Tasks are serialized into JSON before being stored and restored when the application starts.

# Future Improvements
* Integration with a REST API.
* Asynchronous data fetching and error handling.
* Unit and integration tests.
* Further UI and accessibility improvements.