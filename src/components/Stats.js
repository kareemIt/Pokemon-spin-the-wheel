import React, { useState } from 'react';
import Axios from 'axios';

const Stats = ({ pokemon }) => {
  const [pokemonStats, setPokemonStats] = useState({
    image: '',
    name: '',
    type: '',
    species: '',
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
        setPokemonStats({
          image: response.data.sprites.front_default,
          name: pokemon,
          type: response.data.types[0].base_stat,
          species: response.data.species.name,
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
      <span>{pokemonStats.total}</span>
      <button onClick={searchPokemon}>hi</button>
    </div>
  );
};
export default Stats;
