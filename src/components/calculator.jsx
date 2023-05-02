import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import '../styles/calculator.scss';

// Main component
function Calculator() {
  const [text, setText] = useState({
    total: null,
    next: null,
    operation: null,
  });

  let result;
  if (text.next) {
    result = text.next;
  } else if (text.total) {
    result = text.total;
  } else result = 0;

  const handleButtonClick = (event) => {
    const newValue = calculate(text, event.target.textContent);
    setText({ ...text, ...newValue });
  };

  return (
    <div className="main-container">
      <Screen text={result} />
      <Buttons clickValue={handleButtonClick} />
    </div>
  );
}

// Screen component
function Screen({ text }) {
  return (
    <div className="screen-container">
      <div className="screen">{text}</div>
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
  text: PropTypes.string.isRequired,
};

export default Calculator;
