import React from 'react';

const SuccessMessage = ({ message }) => {
  return message ? <p className="text-green-700">{message}</p> : null;
};

export default SuccessMessage;
