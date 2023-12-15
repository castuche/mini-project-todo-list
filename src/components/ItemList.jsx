// ItemList.jsx
import classes from "../styles/ItemsList.module.css";
import { useState } from "react";
import ItemCard from "./ItemCard.jsx";
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

  const handleAddTask = (completed) => {
    const newTask = {
      id: items.length + 1,
      task: `New Task ${items.length + 1}`,
      completed: completed,
    };

    setItems([...items, newTask]);
  };

  return (
    <div>
      <h2>Not Completed Tasks</h2>
      <ItemCard
        items={items.filter((item) => !item.completed)}
        handleToggleComplete={handleToggleComplete}
        handleToggleEdit={handleToggleEdit}
        handleEdit={handleEdit}
        handleDelete={(id) => setItems(items.filter((item) => item.id !== id))}
        handleCheckboxChange={handleCheckboxChange}
        selectedTasks={selectedTasks}
      />
      <button onClick={() => handleAddTask(false)}>Add New Task</button>

      <h2>Completed Tasks</h2>
      <ItemCard
        items={items.filter((item) => item.completed)}
        handleToggleComplete={handleToggleComplete}
        handleToggleEdit={handleToggleEdit}
        handleEdit={handleEdit}
        handleDelete={(id) => setItems(items.filter((item) => item.id !== id))}
        handleCheckboxChange={handleCheckboxChange}
        selectedTasks={selectedTasks}
      />
      <button onClick={() => handleAddTask(true)}>Add New Task</button>

      {selectedTasks.length > 0 && (
        <button onClick={handleDeleteSelected}>Delete Selected</button>
      )}
    </div>
  );
}

export default ItemList;
