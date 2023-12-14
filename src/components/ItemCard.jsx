import React from 'react';
import classes from '../styles/ItemCard.module.css';
import { Link } from 'react-router-dom';

function ItemCard({items,handleDelete}){
    return(
<ul>
     {items.map(currentItem => (
            <Link key={currentItem.id} to={`/detail/${currentItem.id}`}>
            <div className={classes.card}> 
            <h2>{currentItem.task}</h2>
            {currentItem.completed? <label className={classes.labelDone}>Done</label> : <label className={classes.labelNotDone}>Not done</label>}
            <button className={classes.deleteButton} type='button' onClick={()=>handleDelete(currentItem.id)}>Delete this task</button>
            </div>
            </Link>
            ))}
</ul>
    )
     }

export default ItemCard;