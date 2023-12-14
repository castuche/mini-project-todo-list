import classes from '../styles/Navbar.module.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
          <h1 className={classes.Appname}>To-Do List App</h1>
      </NavLink>
      
      <img src="<../assets/app-logo.svg" alt="App to do list logo" className={classes.AppIcon} />
    </nav>
  );
}
export default Navbar;