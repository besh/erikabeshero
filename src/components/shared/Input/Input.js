import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Input.css';

const Input = (props) => {
  const { name, type, placeholder, label } = props;
  return (
    <div styleName="root">
      {label && (
        <label styleName="label">{label}</label>
      )}
      <input styleName="input" type={type} name={name} placeholder={placeholder} />
      <div styleName="border"/>
    </div>
  );
}

Input.defaultProps = {
  type: 'text'
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
}

export default CSSModules(Input, styles);
