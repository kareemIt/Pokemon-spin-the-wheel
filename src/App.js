import React, { useState, useEffect } from 'react';
import './style.css';
import Stats from './components/Stats';
import Wheel from './components/Wheel';

export default function App() {
  const [spun, setSpun] = useState(false);
  const [pokePicked, setPokePicked] = useState('');
  const [pokePicked1, setPokePicked1] = useState('');
  const [leftDone, setLeftDone] = useState(false);
  const [rightDone, setRightDone] = useState(false);

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
    'Mamoswine',
    'Gengar',
    'Ursaring',
    'Houndoom',
    'Haxorus',
    'Swampert',
    'Umbreon',
    'Golurk',
  ];
  useEffect(() => {
    if (rightDone && leftDone) {
      setSpun(true);
    }
  }, [rightDone, leftDone]);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const spinWheel1 = async () => {
    const randomNum = await randomPokemonPicked('left');
    setPokePicked(pokeArray[randomNum % 8]);
    setLeftDone(true);
  };

  const spinWheel2 = async () => {
    const randomNum = await randomPokemonPicked('right');
    setPokePicked1(pokeArray1[randomNum % 8]);
    setRightDone(true);
  };

  async function randomPokemonPicked(side) {
    const randomNum = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    let counter = 0;
    const right = document.querySelector('.' + side);
    for (let i = 0; i < randomNum; i++) {
      await sleep(100);
      const currentCol = right.querySelector('.col' + counter);
      currentCol.style.backgroundColor = '#3d7dca';
      counter++;
      if (counter > 7) {
        counter = 0;
      }
      const changeCol = right.querySelector('.col' + counter);
      changeCol.style.opacity = 1;
      changeCol.style.backgroundColor = '#ffcb05';
    }
    return randomNum;
  }
  return (
    <div>
      <h1>Pokemon Randomizer</h1>
      <div className="container">
        <Wheel array={pokeArray} wheelType={'left'} />
        <button
          onClick={() => {
            spinWheel1();
            spinWheel2();
          }}
        >
          Spin
        </button>
        <Wheel array={pokeArray1} wheelType={'right'} />
      </div>
      {!spun || (
        <div>
          <div className="results">
            <span>Results</span>
          </div>
          <div className="display-container">
            <Stats pokemon={pokePicked} />
            <Stats pokemon={pokePicked1} />
          </div>
        </div>
      )}
    </div>
  );
}
