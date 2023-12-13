import React from 'react';
import classes from '../styles/ItemCard.module.css';
import { v4 as uuidv4 } from 'uuid';

function ItemCard({ items, handleDelete }) {
    const updatedItems = items.map(item => ({ ...item, id: item.id || uuidv4() }));

    return (
        <ul>
            {updatedItems.map(currentItem => (
                <div className={classes.card} key={currentItem.id}>
                    <h2>{currentItem.task}</h2>
                    {currentItem.completed ? (
                        <label className={classes.labelDone}>Done</label>
                    ) : (
                        <label className={classes.labelNotDone}>Not done</label>
                    )}
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




/* import classes from "../styles/ItemCard.module.css"
import { v4 as uuidv4 } from 'uuid';

function ItemCard(items,handleDelete){
    items = items.map(item => ({ ...item, id: uuidv4() }));
    return(
<ul>
     {items.map(currentItem => (
            {currentItem.id=uuidv4()}
            <div className={classes.card} key='currentItem.id'> 
            <h2>{currentItem.task}</h2>
            {currentItem.completed? <label className={classes.labelDone}>Done</label> : <label className={classes.labelNotDone}>Not done</label>}
            <button className={classes.deleteButton} type='button' onClick={()=>handleDelete(currentItem.id)}>Delete this task</button>
            </div>
            ))}
    </ul>
    )
     }

export default ItemCard; */