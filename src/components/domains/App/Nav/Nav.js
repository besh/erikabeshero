import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav styleName="root">
        <ul styleName="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    );
  }
}

export default CSSModules(Nav, styles);
