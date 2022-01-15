import React, { useState } from 'react';
import './style.css';
import Stats from './components/Stats';
import Wheel from './components/Wheel';

export default function App() {
  const [spun, setSpun] = useState(false);
  const [pokePicked, setPokePicked] = useState('gengar');
  const [pokePicked1, setPokePicked1] = useState('gengar');

  const pokeArray = [
    'Darmanitan',
    'Salamence',
    'Luxray',
    'Gigalith',
    'Metagross',
    'Ambipom',
    'Dracozolt',
    'Exploud',
  ];
  const pokeArray1 = [
    'Golurk',
    'Gengar',
    'Ursaring',
    'Houndoom',
    'Haxorus',
    'Swampert',
    'Umbreon',
    'Mamoswine',
  ];

  const spinWheels = () => {
    const randomNum = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    let counter = 0;
    for (let i = 0; i < randomNum; i++) {
      setTimeout(() => {
        const currentcol = document.querySelector('#col' + counter);
        currentcol.style.opacity = '0';
      }, 5000);
      setTimeout(() => {
        const changecol = document.querySelector('#col1');
        console.log(changecol);
        changecol.style.opacity = '1';
      }, 5000);
      if (counter > 7) {
        counter = 0;
      }
    }
    setSpun(true);
  };
  return (
    <div>
      <h1>Pokemon Spin The Wheel</h1>
      <div className="container">
        <Wheel array={pokeArray} landed={setPokePicked} />
        <button onClick={spinWheels}>Spin</button>
        <Wheel array={pokeArray1} landed={setPokePicked1} />
      </div>
      {!spun || (
        <div>
          <span>Results</span>
          <div className="display-container">
            <Stats pokemon={pokePicked} />
            <Stats pokemon={pokePicked1} />
          </div>
        </div>
      )}
    </div>
  );
}
