// DashboardPage.jsx
import React, { useState } from 'react';
import ItemList from '../components/ItemList.jsx';
import itemsData from '../data/items.json';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [items, setItems] = useState(itemsData);
  const navigate = useNavigate();

  // Define the update function to be passed to ItemDetailsPage
  const handleUpdateFromItemDetails = async () => {
    // Perform necessary updates here
    console.log('DashboardPage received update from ItemDetailsPage');
    navigate('/');
  };

  return (
    <div>
      <ItemList onUpdate={handleUpdateFromItemDetails} />
    </div>
  );
};

export default DashboardPage;
