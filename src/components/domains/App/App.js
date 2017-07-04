import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CSSModules from 'react-css-modules';
import { Home, About } from '../index.js';
import Nav from './Nav/Nav.js';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div styleName="root">
          <div styleName="header">
            <h3>Erika Beshero ~ Professional Organizer</h3>
          </div>
          <Nav />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default CSSModules(App, styles);
