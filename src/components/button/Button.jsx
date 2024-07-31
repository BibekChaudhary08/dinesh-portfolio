import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="border border-gray-300 px-4 py-2 rounded-xl">
      {children}
    </button>
  );
};

export default Button;
