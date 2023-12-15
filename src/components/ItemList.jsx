// ItemList.jsx
import classes from "../styles/ItemsList.module.css";
import { useState } from "react";
import ItemCard from "./ItemCard.jsx";
import AddTaskForm from "./AddTaskForm.jsx";
import itemsList from "../data/items.json";

function ItemList() {
  const [items, setItems] = useState(itemsList);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleToggleComplete = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
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
      formData.completed ? [...prevItems, newTask] : [newTask, ...prevItems]
    );
  };

  const completedTasks = items.filter((item) => item.completed);
  const notCompletedTasks = items.filter((item) => !item.completed);

  return (
    <div>
      <AddTaskForm handleAddTask={handleAddTask} />

      <div className={classes.columns}>
        <div className={classes.column}>
          <h2>Done</h2>
          <ItemCard
            items={completedTasks}
            handleToggleComplete={handleToggleComplete}
            handleDelete={(id) => setItems(items.filter((item) => item.id !== id))}
            selectedTasks={selectedTasks}
          />
        </div>

        <div className={classes.column}>
          <h2>To Do</h2>
          <ItemCard
            items={notCompletedTasks}
            handleToggleComplete={handleToggleComplete}
            handleDelete={(id) => setItems(items.filter((item) => item.id !== id))}
            selectedTasks={selectedTasks}
          />
        </div>
      </div>

      {selectedTasks.length > 0 && (
        <button onClick={handleDeleteSelected}>Delete Selected</button>
      )}
    </div>
  );
}

export default ItemList;
