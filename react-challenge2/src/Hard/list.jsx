import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function List() {
  const { id } = useParams();
  const navigate = useNavigate();

  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = storedTasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return (
      <div>
        <h2>Task Not Found</h2>
        <button onClick={() => navigate("/hard")}>Back to Task List</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Task Details</h2>
      <div>
        <h3>Task: {task.title}</h3>
        <p>
          <strong>Details:</strong> {task.details}
        </p>
      </div>
      <button onClick={() => navigate("/hard")}>Back to Task List</button>
    </div>
  );
}
