import React, { useState } from 'react';
import Axios from 'axios';

const Stats = ({ pokemon }) => {
  const [pokemonStats, setPokemonStats] = useState({
    image: '',
    name: '',
    type: '',
    hp: '',
    attack: '',
    defense: '',
    spAtt: '',
    spDef: '',
    speed: '',
    total: '',
  });
  const searchPokemon = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon).then(
      (response) => {
        const hp = response.data.stats[0].base_stat;
        const attack = response.data.stats[1].base_stat;
        const defense = response.data.stats[2].base_stat;
        const spAtt = response.data.stats[3].base_stat;
        const spDef = response.data.stats[4].base_stat;
        const speed = response.data.stats[5].base_stat;
        const typing = response.data.types.map((index) => {
          return index.type.name + ' ';
        });
        console.log(response);
        setPokemonStats({
          image: response.data.sprites.front_default,
          name: pokemon,
          type: typing,
          hp,
          attack,
          defense,
          spAtt,
          spDef,
          speed,
          total: hp + attack + defense + spAtt + spDef + speed,
        });
      }
    );
  };
  return (
    <div>
      <img src={pokemonStats.image} />
      <span>{pokemonStats.name}</span>
      <span>{pokemonStats.type}</span>
      <div className="stats-container">
        <span>Hp: {pokemonStats.hp}</span>
        <span>Attack: {pokemonStats.attack}</span>
        <span>Defenese: {pokemonStats.defense}</span>
        <span>Sp.Att: {pokemonStats.spAtt}</span>
        <span>Sp.Def: {pokemonStats.spDef}</span>
        <span>Speed: {pokemonStats.speed}</span>
        <span>Total: {pokemonStats.total}</span>
      </div>
      <button onClick={searchPokemon}>hi</button>
    </div>
  );
};
export default Stats;
