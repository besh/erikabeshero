import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CSSModules from 'react-css-modules';
import { Home, About, Contact } from 'domains';
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div styleName="root">
          <div styleName="header">
            <h1 styleName="name">Erika Beshero</h1>
            <h2 styleName="tagline">Professional Organizer</h2>
          </div>
          <Nav />
          <div styleName="routes">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default CSSModules(App, styles);
