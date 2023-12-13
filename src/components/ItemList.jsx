import React, { useState } from 'react';
import itemsList from '../data/items.json';
import classes from '../styles/ItemsList.module.css';
import ItemCard from './ItemCard.jsx';

function ItemList() {
    const [items, setItems] = useState(itemsList);

    const handleDelete = idToDelete => {
        const filteredList = items.filter(currentItem => currentItem.id !== idToDelete);
        setItems(filteredList);
    };

    return <ItemCard items={items} handleDelete={handleDelete} />;
}

export default ItemList;



/* import itemsList from "../data/items.json";
import classes from "../styles/ItemsList.module.css"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ItemCard from "./ItemCard.jsx";

function ItemList(){
    const [items, setItems] = useState(itemsList);

    const handleDelete = idToDelete => {
        const filteredList = items.filter(currentItem => currentItem.id !== idToDelete)
        setItems(filteredList)
    }

    return (
    <ItemCard(items,handleDelete)/>
    );
     }
  

export default ItemList ; */


