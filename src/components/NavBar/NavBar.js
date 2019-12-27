import React from 'react';
import logo from '../../assets/logos/logo-teste.png'
import Facebook from '../../assets/icons/facebook.png'
import Instagram from '../../assets/icons/instagram.png'
import WhatsApp from '../../assets/icons/whatsapp.png'
import YouTube from '../../assets/icons/youtube.png'
import useStyles from './styles';

const NavBar = props => {
  const classes = useStyles()

  return (
  <div className={classes.navbar}>
    <div className={classes.container}>
      <nav className={classes.navbarNav}>
        <div>
          <img
            src={logo}
            alt="Nutri Logo" className={classes.logo}
          />
        </div>
        <nav className={classes.navbarLinks}>
          <ul className={classes.menu}>
            <li><a href="/">Inicio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="#about" data-offset="100">Sobre</a></li>
            <li><a href="/contact">Contato</a></li>
          </ul>
          <ul className={classes.menu}>
            <li>
              <a href="/"><img src={Facebook} alt="Facebook"/></a>
            </li>
            <li>
              <a href="/"><img src={Instagram} alt="Instagram"/></a>
            </li>
            <li>
              <a href="/"><img src={YouTube} alt="YouTube"/></a>
            </li>
            <li>
              <a href="/"><img src={WhatsApp} alt="WhatsApp"/></a>
            </li>
          </ul>
        </nav>
      </nav>
    </div>
  </div>
  );
};

export default NavBar;
