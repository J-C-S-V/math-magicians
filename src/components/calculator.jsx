import { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import '../styles/calculator.scss';

const objTemplate = {
  total: null,
  next: null,
  operation: null,
};

function Calculator() {
  const [obj, setObj] = useState(objTemplate);

  let result = 0;
  if (obj.next) {
    result = obj.next;
  } else if (obj.total) {
    result = obj.total;
  }

  const handleButtonClick = (event) => {
    const newValue = calculate(obj, event.target.textContent);
    setObj({ ...obj, ...newValue });
  };

  return (
    <div className="calculator">
      <div className="calculator__h2">Let&apos;s do some math!</div>
      <div className="calculator__container">
        <Screen obj={result} />
        <Buttons clickValue={handleButtonClick} />
      </div>
    </div>
  );
}

function Screen({ obj }) {
  return (
    <div className="screen-container">
      <div className="screen">{obj}</div>
    </div>
  );
}

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
