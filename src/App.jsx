import './styles/App.css';
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ItemDetailsPage from './pages/ItemDetailsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import itemsData from './data/items.json'
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(itemsData);

  const handleUpdateTask = async (id, updatedData) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );
  
    setItems(updatedItems);
    setEditedTask(null); // Clear the edited task after editing
  
    onUpdate();
    navigate('/');
  };

return (
  <div className="App">
    <Navbar/>
    <div className='middle-content'>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<DashboardPage items={items}/>} setItems={setItems}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/detail/:itemId' element={<ItemDetailsPage items={items} setItems={setItems}  handleUpdateTask = {handleUpdateTask}/>} />
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </div>
    <Footer/>

  </div>
);
}

export default App;
