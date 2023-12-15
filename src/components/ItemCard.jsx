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
            <div className={classes.labelsContainer}>
              {currentItem.completed ? (
                <label className={classes.labelDone}>Done</label>
              ) : (
                <label className={classes.labelNotDone}>Not done</label>
              )}
              {currentItem.deadline && (
                <label className={classes.labelDeadline}>
                  DDL: {currentItem.deadline}
                </label>
              )}
              {currentItem.priority && (
                <label className={classes.labelPriority}>
                  Priority: {currentItem.priority}
                </label>
              )}
            </div>
          </Link>
          <button
            className={classes.deleteButton}
            type="button"
            onClick={() => handleDelete(currentItem.id)}
          >
        
          </button>
        </div>
      ))}
    </ul>
  );
}

export default ItemCard;
