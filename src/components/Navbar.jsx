import classes from '../styles/Navbar.module.css'
import { NavLink } from 'react-router-dom'
import toDoIcon from '../assets/To-Do_icon.png'

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
          <h1 className={classes.Appname}> Task assistant </h1>
      </NavLink>
      
      <img src={toDoIcon} alt="App to do list logo" className={classes.AppIcon} />
    </nav>
  );
}
export default Navbar;