import React, { useState, useEffect } from 'react';
import './style.css';
import Stats from './components/Stats';
import Wheel from './components/Wheel';

export default function App() {
  const [spun, setSpun] = useState(false);
  const [pokePicked, setPokePicked] = useState('gengar');
  const [pokePicked1, setPokePicked1] = useState('gengar');
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
    const randomNum = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    let counter = 0;
    const left = document.querySelector('.left');
    for (let i = 0; i < randomNum; i++) {
      await sleep(100);
      const currentcol = left.querySelector('.col' + counter);
      currentcol.style.opacity = 0;
      counter++;
      if (counter > 7) {
        counter = 0;
      }
      const changecol = left.querySelector('.col' + counter);
      changecol.style.opacity = 1;
    }
    setLeftDone(true);
  };
  const spinWheel2 = async () => {
    const randomNum = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    let counter = 0;
    const right = document.querySelector('.right');
    for (let i = 0; i < randomNum; i++) {
      await sleep(100);
      const currentcol = right.querySelector('.col' + counter);
      currentcol.style.opacity = 0;
      counter++;
      if (counter > 7) {
        counter = 0;
      }
      const changecol = right.querySelector('.col' + counter);
      changecol.style.opacity = 1;
    }
    setRightDone(true);
  };

  function spin() {
    spinWheel1();
    spinWheel2();
  }
  return (
    <div>
      <h1>Pokemon Randomizer</h1>
      <div className="container">
        <Wheel array={pokeArray} landed={setPokePicked} wheelType={'left'} />
        <button onClick={spin}>Spin</button>
        <Wheel array={pokeArray1} landed={setPokePicked1} wheelType={'right'} />
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
