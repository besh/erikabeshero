import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav styleName="root">
        <ul styleName="menu">
          <li><NavLink exact to="/" styleName="link">Home</NavLink></li>
          <li><NavLink to="/about" styleName="link">About</NavLink></li>
          <li><NavLink to="/services" styleName="link">Services</NavLink></li>
          <li><NavLink to="/contact" styleName="link">Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default CSSModules(Nav, styles);
