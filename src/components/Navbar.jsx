import classes from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <h1 className={classes.Appname}>To-Do List App</h1>
      <img src="<../assets/app-logo.svg" alt="App to do list logo" className={classes.AppIcon} />
    </nav>
  );
}
export default Navbar;