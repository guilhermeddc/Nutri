import React, { Component } from 'react';
import logo from '../../assets/logos/logo-teste-cm.png'
import Facebook from '../../assets/icons/Facebook-g.png'
import Instagram from '../../assets/icons/Instagram-g.png'
import WhatsApp from '../../assets/icons/WhatsApp-g.png'
import YouTube from '../../assets/icons/YouTube-g.png'
import './style.scss';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      className: 'navbar'
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

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }
  render() {
    return (
      <div className={this.state.className}>
        <div className="container">
          <nav className="navbarNav">
            <div>
              <img
                src={logo}
                alt="Nutri Logo" className="logo"
              />
            </div>
            <nav className="navbarLinks">
              <ul className="menu">
                <li><a href="/">Início</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="#about" data-offset="100">Sobre</a></li>
                <li><a href="/contact">Contato</a></li>
              </ul>
              <ul className="menu">
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
          </nav>
        </div>
      </div >
    )
  };
}

export default NavBar;
