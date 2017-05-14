import React, { PropTypes } from 'react';
import { text } from './styles.css'

const Logout = ({ ...props }) => (
  <div className={text}>
    {'You are now logged out'}
  </div>
);

export default Logout;
