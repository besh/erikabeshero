import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './About.css';

// const history = createBrowserHistory();

class About extends Component {
  render() {
    return (
      <div styleName="root">
        About
      </div>
    );
  }
}

export default CSSModules(About, styles);
