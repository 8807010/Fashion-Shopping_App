import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './Header.scss';
import logoImg from './../../img/icons/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoImg} alt="Logo" />
            <span>Fashion</span>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item"><a href="#!">CATALOGUE</a></li>
              <li><a href="#!">FASHION</a></li>
              <li><a href="#!">FAVOURITE</a></li>
              <li><a href="#!">LIFESTYLE</a></li>
            </ul>
            <Menu right itemListElement="div">
              <a id="home" className="menu-item" href="/">CATALOGUE</a>
              <a id="about" className="menu-item" href="/about">FASHION</a>
              <a id="contact" className="menu-item" href="/contact">FAVOURITE</a>
            </Menu>
            <a href="#!" className="header__nav-btn">SIGN UP</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
