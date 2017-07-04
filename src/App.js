import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import logo from './logo.svg';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div styleName="root">
        <div styleName="header">
          <img src={logo} styleName="logo" alt="logo" />
          <h3>Erika Beshero ~ Professional Organizer</h3>
        </div>
        <p styleName="intro">
          home page
        </p>
      </div>
    );
  }
}

export default CSSModules(App, styles);
