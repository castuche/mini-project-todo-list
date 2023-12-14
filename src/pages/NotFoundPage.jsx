import { Link } from 'react-router-dom'
import classes from '/src/styles/NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={classes.pageNotFound}>
        <h1>Uh Oh! Looks like the page you are looking for does not exist :(</h1>
        </div>
    )
  }
  
  export default NotFoundPage;
