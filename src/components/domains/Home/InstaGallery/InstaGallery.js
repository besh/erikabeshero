import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './InstaGallery.css';

class InstaGallery extends Component {
  shouldComponentUpdate() {
    return false;
  }

  iframe() {
    return {__html: '<!-- LightWidget WIDGET --><script src="//lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/699f7cedcb565e6aa05160b8dbde1543.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0; min-height: 740px;"></iframe>'};
  }

  render() {
    return (
      <div styleName="root">
        <div
          dangerouslySetInnerHTML={this.iframe()}
        />
      </div>
    );
  }
}

export default CSSModules(InstaGallery, styles);
