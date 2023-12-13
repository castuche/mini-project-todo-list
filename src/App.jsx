import './App.css';
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import ItemList from './components/ItemList.jsx'

function App() {
return (
  <div className="App">
    <Navbar className='navbar'>  </Navbar>
    <div className='middleContent'>  

    <Sidebar> </Sidebar>
    <ItemList/>
    
    </div>
    <Footer>  </Footer>

  </div>
);
}

export default App;
