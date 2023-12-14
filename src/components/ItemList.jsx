import classes from "../styles/ItemsList.module.css"
import { useState } from "react";
import ItemCard from "./ItemCard.jsx";
import itemsList from '../data/items.json'

function ItemList(){
    const [items, setItems] = useState(itemsList);

    const handleDelete = idToDelete => {
        const filteredList = items.filter(currentItem => currentItem.id !== idToDelete)
        setItems(filteredList)
    }

    return (
    <ItemCard items={items} handleDelete={handleDelete}/>
    );
     }
  

export default ItemList ; 


