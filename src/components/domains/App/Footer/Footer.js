import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <nav styleName="root">
        <ul styleName="menu">

        </ul>
      </nav>
    );
  }
}

export default CSSModules(Footer, styles);
