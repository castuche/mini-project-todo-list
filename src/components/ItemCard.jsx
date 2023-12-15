// ItemCard.jsx
import React from 'react';
import classes from '../styles/ItemCard.module.css';
import { Link } from 'react-router-dom';

function ItemCard({ items, handleToggleComplete, handleDelete }) {
  return (
    <ul>
      {items.map((currentItem) => (
        <div className={classes.card} key={currentItem.id}>
          {currentItem.completed ? (
            <div>
              <Link to={`/detail/${currentItem.id}`}>
                <h2>{currentItem.task}</h2>
              </Link>
              <div className={classes.labelsContainer}>
                <label className={classes.labelDone}>Done</label>
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
              <button
                className={classes.deleteButton}
                type="button"
                onClick={() => handleDelete(currentItem.id)}
              ></button>
            </div>
          ) : (
            <div onClick={() => handleToggleComplete(currentItem.id)}>
              <Link to={`/detail/${currentItem.id}`}>
                <h2>{currentItem.task}</h2>
              </Link>
              <div className={classes.labelsContainer}>
                <label
                  className={classes.labelNotDone}
                  onClick={() => handleToggleComplete(currentItem.id)}
                >
                  To Do
                </label>
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
              <button
                className={classes.deleteButton}
                type="button"
                onClick={() => handleDelete(currentItem.id)}
              ></button>
            </div>
          )}
        </div>
      ))}
    </ul>
  );
}

export default ItemCard;
