import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav styleName="root">
        <ul styleName="menu">
          <li styleName="item"><NavLink exact to="/" styleName="link">Home</NavLink></li>
          <li styleName="item"><NavLink to="/about" styleName="link">About</NavLink></li>
          <li styleName="item"><NavLink to="/services" styleName="link">Services</NavLink></li>
          <li styleName="item"><NavLink to="/contact" styleName="link">Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default CSSModules(Nav, styles);
