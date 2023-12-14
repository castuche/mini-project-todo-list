import classes from '../styles/Sidebar.module.css'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
      <aside className={classes.sideItems}>
        <ul>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}><li>Home</li></NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}><li>About</li></NavLink>
        </ul>
      </aside>
    );
  }
  export default Sidebar;