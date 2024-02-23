import React from 'react';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>
          <span>good: </span>
          <span>{good}</span>
        </li>
        <li>
          <span>Neutral: </span>
          <span>{neutral}</span>
        </li>
        <li>
          <span>Bad: </span>
          <span>{bad}</span>
        </li>
        <li>
          <span>Total: </span>
          <span>{total()}</span>
        </li>
        <li>
          <span>Positiv fedback: </span>
          <span>{positivePercentage()}%</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistic;
