import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import '../styles/calculator.css';

// Main component

const objTemplate = {
  total: null,
  next: null,
  operation: null,
}

function Calculator() {
  const [obj, setObj] = useState(objTemplate);

  const result = obj.next || obj.total || 0;

  const handleButtonClick = (event) => {
    const newValue = calculate(obj, event.target.objContent);
    setObj({ ...obj, ...newValue });
  };

  return (
    <div className="main-container">
      <Screen obj={result} />
      <Buttons clickValue={handleButtonClick} />
    </div>
  );
}

// Screen component
function Screen({ obj }) {
  return (
    <div className="screen-container">
      <div className="screen">{obj}</div>
    </div>
  );
}

// Buttons component
function Buttons({ clickValue }) {
  const simbols = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  const simbolsContainer = [];
  for (let i = 0; i < simbols.length; i += 1) {
    simbolsContainer.push(
      <button onClick={clickValue} type="button" className="button" key={i}>
        {simbols[i]}
      </button>,
    );
  }
  return simbolsContainer;
}

Screen.propTypes = {
  obj: PropTypes.string.isRequired,
};

export default Calculator;
