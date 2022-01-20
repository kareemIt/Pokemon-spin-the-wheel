import React from 'react';
import './style.css';

const Wheel = ({ array, wheelType }) => {
  return (
    <div>
      <div className={wheelType}>
        {array.map((letter, index) => {
          return (
            <div className={'col' + index} key={index}>
              {letter.split('').map((letter, index) => (
                <span className="letter" key={index}>
                  {letter}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Wheel;
