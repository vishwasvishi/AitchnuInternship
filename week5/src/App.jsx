import React, { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {

const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
});

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

const addTask = (text) => {
  const newTask = {
    id: Date.now(),
    text: text,
    completed: false
  };
  setTasks([...tasks, newTask]);
};

const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};

const toggleComplete = (id) => {
  setTasks(
    tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};


const toggleTheme = () => {
  setDarkMode(!darkMode);
};

return (
  <div className={darkMode ? "dark" : ""}>

    <header className="navbar">

      <h2>Task Manager</h2>

      <button className="toggle-btn" onClick={toggleTheme}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

    </header>

    <main className="main-container">

      <div className="container">

        <h1>My Task Manager</h1>

        <p className="counter">Total Tasks: {tasks.length}</p>

        <TaskInput addTask={addTask} />

        {tasks.length === 0 ? (
          <p className="empty">No tasks available</p>
        ) : (
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        )}

      </div>

    </main>

    <footer className="footer">
      <p>© 2026 Task Manager | Built with React</p>
    </footer>

  </div>
);
}

export default App;