// ItemList.jsx
import classes from "../styles/ItemsList.module.css";
import { useState } from "react";
import ItemCard from "./ItemCard.jsx";
import AddTaskForm from "./AddTaskForm.jsx";
import itemsList from "../data/items.json";

function ItemList() {
  const [items, setItems] = useState(itemsList);
  const [editingItemId, setEditingItemId] = useState(null);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleToggleComplete = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
    setEditingItemId(null);
  };

  const handleToggleEdit = (id) => {
    setEditingItemId((prevId) => (prevId === id ? null : id));
  };

  const handleEdit = (id, newTask) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, task: newTask } : item
    );
    setItems(updatedItems);
    setEditingItemId(null);
  };

  const handleCheckboxChange = (id) => {
    if (selectedTasks.includes(id)) {
      setSelectedTasks(selectedTasks.filter((taskId) => taskId !== id));
    } else {
      setSelectedTasks([...selectedTasks, id]);
    }
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

    // Determine which list to add the task based on the 'completed' status
    setItems((prevItems) => (formData.completed ? [...prevItems, newTask] : [newTask, ...prevItems]));
  };

  // Separate completed and not completed tasks
  const completedTasks = items.filter((item) => item.completed);
  const notCompletedTasks = items.filter((item) => !item.completed);

  return (
    <div>
      {/* AddTaskForm component at the top */}
      <AddTaskForm handleAddTask={handleAddTask} />

      <div className={classes.columns}>
        {/* Completed Tasks column */}
        <div className={classes.column}>
          <h2>Done</h2>
          <ItemCard
            items={completedTasks}
            handleToggleComplete={handleToggleComplete}
            handleToggleEdit={handleToggleEdit}
            handleEdit={handleEdit}
            handleDelete={(id) => setItems(items.filter((item) => item.id !== id))}
            handleCheckboxChange={handleCheckboxChange}
            selectedTasks={selectedTasks}
          />
        </div>

        {/* Not Completed Tasks column */}
        <div className={classes.column}>
          <h2>To Do</h2>
          <ItemCard
            items={notCompletedTasks}
            handleToggleComplete={handleToggleComplete}
            handleToggleEdit={handleToggleEdit}
            handleEdit={handleEdit}
            handleDelete={(id) => setItems(items.filter((item) => item.id !== id))}
            handleCheckboxChange={handleCheckboxChange}
            selectedTasks={selectedTasks}
          />
        </div>
      </div>

      {/* Delete selected button */}
      {selectedTasks.length > 0 && (
        <button onClick={handleDeleteSelected}>Delete Selected</button>
      )}
    </div>
  );
}

export default ItemList;
