import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Hard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null); // ID of the task being edited
  const [editTaskTitle, setEditTaskTitle] = useState(""); // Title of the task being edited

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObj = { id: Date.now(), title: newTask };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task) => {
    setEditingTaskId(task.id); // Set the task to be edited
    setEditTaskTitle(task.title); // Pre-fill the input with the task's current title
  };

  const handleSaveEdit = (id) => {
    if (editTaskTitle.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, title: editTaskTitle } : task
        )
      );
      setEditingTaskId(null); // Reset editing state
      setEditTaskTitle(""); // Clear the input
    }
  };

  return (
    <div className="task-container">
      <h2 className="task-header">Task List</h2>
      <div className="task-input-container">
        <input
          className="task-input"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-item" key={task.id}>
            {editingTaskId === task.id ? (
              <input
                className="edit-input"
                type="text"
                value={editTaskTitle}
                onChange={(e) => setEditTaskTitle(e.target.value)}
              />
            ) : (
              <Link className="task-link" to={`/task/${task.id}`}>
                {task.title}
              </Link>
            )}

            {editingTaskId === task.id ? (
              <button
                className="save-task-button"
                onClick={() => handleSaveEdit(task.id)}
              >
                Save
              </button>
            ) : (
              <button
                className="edit-task-button"
                onClick={() => handleEditTask(task)}
              >
                Edit
              </button>
            )}

            <button
              className="delete-task-button"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
