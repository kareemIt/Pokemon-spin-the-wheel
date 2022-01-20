import React, { useState, useEffect } from 'react';
import './style.css';
import Stats from './components/Stats';
import Wheel from './components/Wheel';
const pokeArray1 = [
  'Darmanitan',
  'Salamence',
  'Luxray',
  'Gigalith',
  'Metagross',
  'Ambipom',
  'Dracozolt',
  'Exploud',
];
const pokeArray2 = [
  'Mamoswine',
  'Gengar',
  'Ursaring',
  'Houndoom',
  'Haxorus',
  'Swampert',
  'Umbreon',
  'Golurk',
];

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
export default function App() {
  const [pokeLeftPicked, setPokeLeftPicked] = useState(-1);
  const [pokeRightPicked, setPokeRightPicked] = useState(-1);
  const [isFinished, setIsFinished] = useState(false);

  const randomPokemonPicked = async (setFunction) => {
    const chosenIndex = Math.floor(Math.random() * 11) + 10;

    for (let i = 0; i < chosenIndex; i++) {
      await sleep((i / chosenIndex) * 200);

      setFunction(i % 8);
    }
    return chosenIndex;
  };
  const handleSpin = async () => {
    setIsFinished(false);

    const promises = [
      randomPokemonPicked(setPokeLeftPicked),
      randomPokemonPicked(setPokeRightPicked),
    ];
    await Promise.all(promises);
    setIsFinished(true);
  };
  return (
    <div>
      <h1>Pokemon Randomizer</h1>
      <div className="wheel-container">
        <Wheel
          pokeNames={pokeArray1}
          wheelType={'left'}
          activeRow={pokeLeftPicked}
        />
        <button onClick={handleSpin}>Spin</button>
        <Wheel
          pokeNames={pokeArray2}
          wheelType="right"
          activeRow={pokeRightPicked}
        />
      </div>
      {isFinished && (
        <div>
          <div className="results">
            <span>Results</span>
          </div>
          <div className="display-container">
            <Stats pokemon={pokeArray1[pokeLeftPicked]} />
            <Stats pokemon={pokeArray2[pokeRightPicked]} />
          </div>
        </div>
      )}
    </div>
  );
}
