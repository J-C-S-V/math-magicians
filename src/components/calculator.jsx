import React from 'react';
import '../styles/calculator.css';

function Screen() {
  return (
    <div className="screen-container">
      <div className="screen">0</div>
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
      <div className="button" key={i}>
        {simbols[i]}
      </div>,
    );
  }
  return simbolsContainer;
}

function Calculator() {
  return (
    <div className="main-container">
      <Screen />
      <Buttons />
    </div>
  );
}

export default Calculator;
