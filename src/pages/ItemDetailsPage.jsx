import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import classes from '../styles/AddTaskForm.module.css';

function ItemDetailsPage({ items, handleUpdateTask, initialData, onUpdate }) {
  const { itemId } = useParams();
  const navigate = useNavigate();

  // Find the item based on the itemId
  const itemDetails = items.find((item) => item.id == itemId);

  const [formData, setFormData] = useState({
    task: '',
    completed: false,
    deadline: '',
    priority: 'Low',
    ...itemDetails, // Use itemDetails if provided
    ...initialData, // Use initialData if provided
  });

  // Update form data when itemDetails or initialData changes
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      ...itemDetails,
      ...initialData,
    }));
  }, [itemDetails, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

// ItemDetailsPage.jsx
const handleSubmit = (e) => {
  e.preventDefault();
  handleUpdateTask(itemId, formData);
  // Notify the DashboardPage about the update
  onUpdate();
  // Redirect back to the dashboard
  navigate('/');
};


  

  return (
    <>
      <h2>Task</h2>
      <form className={classes.addTaskForm} onSubmit={handleSubmit}>
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
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>

        <button type="submit">Save</button>

      </form>
    </>
  );
}

export default ItemDetailsPage;
