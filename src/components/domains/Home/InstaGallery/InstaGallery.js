import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './InstaGallery.css';

class InstaGallery extends Component {
  shouldComponentUpdate() {
    return false;
  }

  iframe() {
    return {__html: '<script src="//lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/eb47fcba829459ad97583055194fa02b.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0; overflow: hidden;"></iframe>'};
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
