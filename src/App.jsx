import './styles/App.css';
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import ItemList from './components/ItemList.jsx'

function App() {
return (
  <div className="App">
    <Navbar/>
    <div className='middle-content'>
    <Sidebar/>
    <ItemList/>
    </div>
    <Footer/>
  </div>
);
}

export default App;
