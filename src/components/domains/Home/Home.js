import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Home.css';

// const history = createBrowserHistory();

class Home extends Component {
  render() {
    return (
      <div styleName="root">
        Home
      </div>
    );
  }
}

export default CSSModules(Home, styles);
