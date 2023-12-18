// ItemList.jsx
import classes from "../styles/ItemsList.module.css";
import { useState } from "react";
import ItemCard from "./ItemCard.jsx";
import AddTaskForm from "./AddTaskForm.jsx";
import itemsList from "../data/items.json";
import ItemDetailsPage from "../pages/ItemDetailsPage.jsx";

function ItemList() {
  const [items, setItems] = useState(itemsList);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null); // Track edited task

  const handleToggleComplete = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  const handleDeleteTask = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleDeleteSelected = () => {
    const updatedItems = items.filter(
      (item) => !selectedTasks.includes(item.id)
    );
    setItems(updatedItems);
    setSelectedTasks([]);
  };

  const handleAddTask = (formData) => {
    const newTask = {
      id: items.length + 1,
      ...formData,
    };

    setItems((prevItems) =>
      formData.completed
        ? [...prevItems, newTask]
        : [newTask, ...prevItems]
    );
  };

  const handleUpdateTask = (id, updatedData) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );
  
    setItems(updatedItems);
    setEditedTask(null); // Clear the edited task after editing
  
    // Return the updated items
    return updatedItems;
  };
  
  

  return (
    <div>
      <AddTaskForm handleAddTask={handleAddTask} />

      <div className={classes.columns}>
        <div className={classes.column}>
          <h2>Done</h2>
          <ItemCard
            items={items.filter((item) => item.completed)}
            handleDelete={handleDeleteTask}
            handleToggleComplete={handleToggleComplete}
            setSelectedTask={(task) => setEditedTask(task)} // Set the task to be edited
          />
        </div>

        <div className={classes.column}>
          <h2>To Do</h2>
          <ItemCard
            items={items.filter((item) => !item.completed)}
            handleDelete={handleDeleteTask}
            handleToggleComplete={handleToggleComplete}
            setSelectedTask={(task) => setEditedTask(task)} // Set the task to be edited
          />
        </div>
      </div>

      {selectedTasks.length > 0 && (
        <button onClick={handleDeleteSelected}>Delete Selected</button>
      )}

      {/* Render the ItemDetailsPage for editing */}
      {editedTask && (
        <ItemDetailsPage
          items={items}
          handleUpdateTask={handleUpdateTask}
          setItems = {setItems}
        />
      )}
    </div>
  );
}

export default ItemList;
