import logo from './ultrashop.png';
import './App';
import logoCommsult from './commsultLogo.jpg';
import React from 'react';
import WOW from 'wowjs';

class FirstPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "firstPage"
    }
  }


  changePage = newPage => {
    this.setState({ page: newPage })
  }

  onLogin = () => {
    this.props.changePage("login")
  }


  render() {
    return (
      <div className="firstPage">
        <header className="App-header">
          <nav id="mainNavbar">
            <div id="home">
              <img src={logo} className="App-logo" alt="logo" />
              <a className="homeText" href=" http://www.google.com">UltraShop</a>
            </div>
            <button id="hamburger" className="menu-toggle">
              <span className="menu-toggle-hamburger"></span>
              <span className="menu-toggle-hamburger"></span>
              <span className="menu-toggle-hamburger"></span>
            </button>
            <ul id="nav-ul">
              <li><a className="homeText" href="#aboutUs">About</a></li>
              <li><a className="homeText" href="#aboutOwner">Owner</a></li>
              <li><a className="homeText" href="#contactUs">Contact Us</a></li>
              <li><a className="homeText" id="loginLink" onClick={this.onLogin}>Login</a></li>
            </ul>
          </nav>
        </header>
        <section id="introduction">
          <h1 id="slogan">Products with competitive prices</h1>
        </section>
        <div id="aboutUs" className="wow animate__slideInLeft">
          <div id="descriptionUs">
            <h2>About Us</h2>
            <p>UltraShop is one of the biggest E-Commerce in Indonesia. We provide various products with competitive prices here. Our company has been awarded as one of the most influential companies in Indonesia.
            </p>
          </div>
          <div id="descriptionImage">
            <img src={logo} className="aboutUs" alt="logo" />
          </div>
        </div>
        <div id="aboutOwner">
          <div id="descriptionImage">
            <img src={logoCommsult} className="aboutOwner" alt="logo" />
          </div>
          <div id="descriptionOwner">
            <h2>Owner</h2>
            <p>Commsult is a software company based in Potsdam, Germany. The company focuses in mobile software development especially related to corporate or industry ERP systems. The company has established in Switzerland, Singapore, and Indonesia.
            </p>
          </div>
        </div>
        <footer id="contactUs">
          <div id="socialmedia">
            <a href="https://www.facebook.com/haenuki.sachi.9" className="socialmediaicon">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://www.instagram.com/haenukisachi_" className="socialmediaicon">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="mailto:sachihaenuki1@gmail.com" className="socialmediaicon">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
            <a href="https://api.whatsapp.com/send?phone=6288808703528" className="socialmediaicon">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </div>
          <p id="footerText">&#169; 2022 Commsult</p>
        </footer>
      </div >
    );
  }
}

export default FirstPage;
