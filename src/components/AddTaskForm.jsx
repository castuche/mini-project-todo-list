// AddTaskForm.jsx
import React, { useState } from 'react';
import classes from '../styles/AddTaskForm.module.css';

function AddTaskForm({ handleAddTask }) {
  const [formData, setFormData] = useState({
    task: '',
    completed: false,
    deadline: '',
    priority: 'Low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(formData);
    // Reset form data after submitting
    setFormData({
      task: '',
      completed: false,
      deadline: '',
      priority: 'Low',
    });
  };

  return (
    <form className={classes.addTaskForm} onSubmit={handleSubmit}>
    <p className={classes.Title}></p>
      <label>
        Task:
        <input
          type="text"
          name="task"
          value={formData.task}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Completed:
        <input
          type="checkbox"
          name="completed"
          checked={formData.completed}
          onChange={handleChange}
        />
      </label>
      <label>
        Deadline:
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Priority:
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          required
        >
          <option value="H">High</option>
          <option value="M">Medium</option>
          <option value="L">Low</option>
        </select>
      </label>
      <button type="submit">Add Task</button>

    </form>
  );
}

export default AddTaskForm;
