import classes from '../styles/Sidebar.module.css'

function Sidebar() {
    return (
      <aside className={classes.sideItems}>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </aside>
    );
  }
  export default Sidebar;