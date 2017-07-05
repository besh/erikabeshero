import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Button.css';

const Button = (props) => {
  const { text, type, onClick } = props;
  return (
    <button type={type} styleName="root" onClick={onClick}>{text}</button>
  );
}

Button.defaultProps = {
  type: 'submit'
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default CSSModules(Button, styles);
