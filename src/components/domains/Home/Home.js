import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import InstaGallery from './InstaGallery/InstaGallery.js';
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div styleName="root">
        <InstaGallery />
      </div>
    );
  }
}

export default CSSModules(Home, styles);
