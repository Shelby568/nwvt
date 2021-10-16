import React from 'react';

const Alert = ({ message, success }) => (
  <div className={`Alert ${success ? 'success' : 'error'}`}>
    {message}
  </div>
);

export default Alert;