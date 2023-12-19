// DashboardPage.jsx
import React, { useState } from 'react';
import ItemList from '../components/ItemList.jsx';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/DashboardPage.module.css'; // Import a separate stylesheet for DashboardPage

const DashboardPage = ({items, setItems}) => {

  const navigate = useNavigate();

  const handleUpdateFromItemDetails = async () => {
    console.log('DashboardPage received update from ItemDetailsPage');
    navigate('/');
  };

  return (
    <div className={styles.dashboardPage}>
      <ItemList onUpdate={handleUpdateFromItemDetails} items={items} setItems ={setItems}/>
    </div>
  );
};

export default DashboardPage;
