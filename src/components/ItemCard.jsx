// ItemCard.jsx
import React from 'react';
import classes from '../styles/ItemCard.module.css';
import { Link } from 'react-router-dom';

function ItemCard({ items, handleDelete }) {
  return (
    <ul>
      {items.map((currentItem) => (
        <div className={classes.card} key={currentItem.id}>
          <Link to={`/detail/${currentItem.id}`}>
            <h2>{currentItem.task}</h2>
            {currentItem.completed ? (
              <label className={classes.labelDone}>Done</label>
            ) : (
              <label className={classes.labelNotDone}>Not done</label>
            )}
          </Link>
          <button
            className={classes.deleteButton}
            type="button"
            onClick={() => handleDelete(currentItem.id)}
          >
            Delete this task
          </button>
        </div>
      ))}
    </ul>
  );
}

export default ItemCard;