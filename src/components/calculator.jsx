import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/calculator.css';

function Calculator() {
  const [state, setState] = useState(0);

  function handleIncrement(event) {
    setState(event.target.textContent);
  }

  return (
    <div className="main-container">
      <Screen state={state} />
      <Buttons />
    </div>
  );
}

function Screen({ state }) {
  return (
    <div className="screen-container">
      <div className="screen">{state}</div>
    </div>
  );
}

function Buttons() {
  const simbols = [
    'AC',
    '+/-',
    '%',
    '+',
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
      <button type="button" className="button" key={i}>
        {simbols[i]}
      </button>,
    );
  }
  return simbolsContainer;
}

Screen.propTypes = {
  state: PropTypes.string.isRequired,
};

export default Calculator;
