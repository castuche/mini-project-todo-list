// DashboardPage.jsx
import React, { useState } from 'react';
import ItemList from '../components/ItemList.jsx';
import itemsData from '../data/items.json';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/DashboardPage.module.css'; // Import a separate stylesheet for DashboardPage

const DashboardPage = () => {
  const [items, setItems] = useState(itemsData);
  const navigate = useNavigate();

  const handleUpdateFromItemDetails = async () => {
    console.log('DashboardPage received update from ItemDetailsPage');
    navigate('/');
  };

  return (
    <div className={styles.dashboardPage}>
      <ItemList onUpdate={handleUpdateFromItemDetails} />
    </div>
  );
};

export default DashboardPage;
