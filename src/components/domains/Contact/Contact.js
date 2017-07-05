import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Input } from 'shared';
import styles from './Contact.css';

// const history = createBrowserHistory();

class Contact extends Component {
  render() {
    return (
      <div styleName="root">
        <div styleName="row">
          <Input name={'fullname'} placeholder={'Jane Doe'} label={'Full name'} />
        </div>
        <div styleName="row">
          <Input name={'email'} type={'email'} placeholder={'janedoe@gmail.com'} label={'Email'} />
        </div>
        <div styleName="row">
          <Input name={'phone'} placeholder={'(555)-555-5555'} label={'Phone'} />
        </div>
      </div>
    );
  }
}

export default CSSModules(Contact, styles);
