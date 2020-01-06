import React, { Component } from 'react';
import logo from '../../assets/logos/logo-teste-cm.png'
import Facebook from '../../assets/icons/Facebook-g.png'
import Instagram from '../../assets/icons/Instagram-g.png'
import WhatsApp from '../../assets/icons/WhatsApp-g.png'
import YouTube from '../../assets/icons/YouTube-g.png'
import Menu from '../../assets/icons/menu.png'
import './style.scss';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      className: 'navbar',
      active: false,
    }
  }
  
  handleScroll() {
    if (document.documentElement.scrollTop > 70) {
      this.setState({
        className: 'navbarDown'
      })
    } else {
      this.setState({
        className: 'navbar'
      })
    }
  }

  tapMenu = () => {
    this.setState({
      active: !this.state.active
    })
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }
  
  render() {
    return (
      <div className={this.state.className}>
        <div className="container">
          <nav className="navbarNav">
            <div className="logo">
              <img
                src={logo}
                alt="Nutri Logo"
              />
            </div>
            <nav className={`navbarLinks ${this.state.active ? 'active' : ''}`}>
              <ul className="menu">
                <li><a href="/">Início</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="#about" data-offset="100">Sobre</a></li>
                <li><a href="/contact">Contato</a></li>
              </ul>
              <ul className="menu down">
                <li>
                  <a href="/"><img src={Facebook} alt="Facebook" /></a>
                </li>
                <li>
                  <a href="/"><img src={Instagram} alt="Instagram" /></a>
                </li>
                <li>
                  <a href="/"><img src={YouTube} alt="YouTube" /></a>
                </li>
                <li>
                  <a href="/"><img src={WhatsApp} alt="WhatsApp" /></a>
                </li>
              </ul>
            </nav>
            <button
              onClick={this.tapMenu}
              data-menu="button"
              aria-expanded="false"
              aria-controls="menu"
              className="menuDown" 
            >
              <img src={Menu} alt="Icon Menu" />
            </button>
          </nav>
        </div>
      </div >
    )
  };
}

export default NavBar;
