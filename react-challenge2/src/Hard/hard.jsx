import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Hard() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDetails, setNewTaskDetails] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState("");
  const [editTaskDetails, setEditTaskDetails] = useState("");

  const handleAddTask = () => {
    if (newTaskTitle.trim() && newTaskDetails.trim()) {
      const newTaskObj = {
        id: Date.now(),
        title: newTaskTitle,
        details: newTaskDetails,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTaskTitle("");
      setNewTaskDetails("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task) => {
    setEditingTaskId(task.id);
    setEditTaskTitle(task.title);
    setEditTaskDetails(task.details);
  };

  const handleSaveEdit = (id) => {
    if (editTaskTitle.trim() && editTaskDetails.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === id
            ? { ...task, title: editTaskTitle, details: editTaskDetails }
            : task
        )
      );
      setEditingTaskId(null);
      setEditTaskTitle("");
      setEditTaskDetails("");
    }
  };

  return (
    <div className="task-container">
      <h2 className="task-header">Task List</h2>
      <div className="task-input-container">
        <input
          className="task-input"
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new task"
        />
        <input
          className="task-input"
          value={newTaskDetails}
          onChange={(e) => setNewTaskDetails(e.target.value)}
          placeholder="Add task details"
        />
        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-item" key={task.id}>
            {editingTaskId === task.id ? (
              <>
                <input
                  className="edit-input"
                  type="text"
                  value={editTaskTitle}
                  onChange={(e) => setEditTaskTitle(e.target.value)}
                />
                <input
                  className="edit-input"
                  value={editTaskDetails}
                  onChange={(e) => setEditTaskDetails(e.target.value)}
                />
              </>
            ) : (
              <Link className="task-link" to={`/task/${task.id}`}>
                <strong>{task.title}</strong>
                <p>{task.details}</p>
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
