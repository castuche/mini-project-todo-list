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

return (
  <div className="App">
    <Navbar/>
    <div className='middle-content'>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<DashboardPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/detail/:itemId' element={<ItemDetailsPage items={items} />} />
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </div>
    <Footer/>

  </div>
);
}

export default App;
