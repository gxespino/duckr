import React, { PropTypes } from 'react';
import { button } from 'sharedStyles/styles.css';

const FacebookAuthButton = ({ isFetching, onAuth }) => (
  <button className={button} onClick={onAuth}>
    {isFetching === true
      ? 'Loading...'
      : 'Login with Facebook'}
  </button>
);

FacebookAuthButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
};

export default FacebookAuthButton;
