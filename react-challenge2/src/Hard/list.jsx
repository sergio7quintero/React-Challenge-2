import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function List() {
  const { id } = useParams();
  const navigate = useNavigate();

  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = storedTasks.find((task) => task.id === parseInt(id));

  const [taskTitle, setTaskTitle] = useState(task ? task.title : "");

  const handleSave = () => {
    const updatedTasks = storedTasks.map((t) =>
      t.id === parseInt(id) ? { ...t, title: taskTitle } : t
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    navigate("/");
  };

  return (
    <div>
      {task ? (
        <>
          <h2>Edit Task</h2>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <p>Task not found</p>
      )}
    </div>
  );
}
