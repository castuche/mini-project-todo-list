import classes from '../styles/Footer.module.css'

function Footer() {
    return (
      <footer className={classes.footerContent}>
        < img src=".src/assets/github-logo.png" alt="Github Logo" className={classes.githubLogo}/>
        <p className={classes.githubLink}><a href ="https://github.com/castuche/mini-project-todo-list">GitHub Repository</a></p>
      </footer>
    );
  }
  export default Footer;