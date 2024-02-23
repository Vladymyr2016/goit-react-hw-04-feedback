import React from 'react';

const FeadbackOptions = ({ options, onLiveFeadback }) => {
  return (
    <div>
      {options.map(option => (
        <button key={option} onClick={() => onLiveFeadback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeadbackOptions;
