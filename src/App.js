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
    //spin
    setSpun(true);
  };
  // console.log(pokePicked);
  return (
    <div>
      <h1>Pokemon Spin The Wheel</h1>
      <div className="container">
        {/* <Wheel array={pokeArray} landed={setPokePicked} /> */}
        <button onClick={spinWheels}>Spin</button>
        {/* <Wheel array={pokeArray1} landed={setPokePicked1} /> */}
      </div>
      {!spun || (
        <div className="display-container">
          <span>Results</span>
          <Stats pokemon={pokePicked} />
          <Stats pokemon={pokePicked1} />
        </div>
      )}
    </div>
  );
}
