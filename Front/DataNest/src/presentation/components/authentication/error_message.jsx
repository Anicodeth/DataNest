import React from 'react';

const ErrorMessage = ({ message }) => {
  return message ? <p className="text-red-400">{message}</p> : null;
};

export default ErrorMessage;
