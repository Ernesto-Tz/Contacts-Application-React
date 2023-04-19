import classes from './Footer.module.scss'

const Footer = props => {
  return(
    <footer className={classes.footer}>
      {/* Better if you get the current year with JS. No need to update :) */}
      <p>All rights Reserved <b>_VO</b>IS { new Date().getFullYear() }</p>
    </footer>
  );
}

export default Footer;