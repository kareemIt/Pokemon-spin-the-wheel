import React from 'react';
import './style.css';

const Wheel = ({ pokeNames, wheelType, activeRow }) => (
  <div>
    <div className={'wheel ' + wheelType}>
      {pokeNames.map((name, index) => (
        <div
          className={'row' + (index === activeRow ? ' active' : '')}
          key={name}
        >
          {name}
        </div>
      ))}
    </div>
  </div>
);

export default Wheel;
