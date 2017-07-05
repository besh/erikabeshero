import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Input, Button } from 'shared';
import styles from './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false };
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('submitting!');
    this.setState({ submitted: true });
  }

  render() {
    return (
      <div styleName="root">
        {!this.state.submitted
          ? (
            <form onSubmit={this.handleOnSubmit}>
              <div styleName="row">
                <Input name={'fullname'} placeholder={'Jane Doe'} label={'Full name'} />
              </div>
              <div styleName="row">
                <Input name={'email'} type={'email'} placeholder={'janedoe@gmail.com'} label={'Email'} />
              </div>
              <div styleName="row">
                <Input name={'phone'} placeholder={'(555)-555-5555'} label={'Phone'} />
              </div>
              <div styleName="row">
                <Button text={'submit'} onClick={this.handleOnSubmit} />
              </div>
            </form>
          )
          : (
            <p>THANKS!</p>
          )
        }
      </div>
    );
  }
}

export default CSSModules(Contact, styles);
