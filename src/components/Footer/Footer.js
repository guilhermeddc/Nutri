import React from 'react';
import useStyles from './styles';
import Facebook from '../../assets/icons/Facebook.png'
import Instagram from '../../assets/icons/Instagram.png'
import WhatsApp from '../../assets/icons/WhatsApp.png'
import YouTube from '../../assets/icons/YouTube.png'

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <hr />
      <div className={classes.container}>
        <div className={classes.socialLinks}>
          <a href="/"><img src={Facebook} alt="facebook" /></a>
          <a href="/"><img src={Instagram} alt="instagram" /></a>
          <a href="/"><img src={YouTube} alt="youtube" /></a>
          <a href="/"><img src={WhatsApp} alt="whatsapp" /></a>
        </div>
        <hr />
        <div className={classes.footerBody}>
          <ul>
            <li>Inicio</li>
            <li>Blog</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
          <ul>
            <li>Inicio</li>
            <li>Blog</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
          <ul>
            <li>Inicio</li>
            <li>Blog</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
          <ul>
            <li>Inicio</li>
            <li>Blog</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </div>
        <hr />
        <div className={classes.copyright}>
          <p>© 2020 Copyright: Nutri</p>
        </div>
      </div>
      <hr />
    </footer>
  );
}

export default Footer;