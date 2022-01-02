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
        console.log(response);
        setPokemonStats({
          image: response.data.sprites.front_default,
          name: pokemon,
          type: response.data.types[0].base_stat,
          species: response.data.species.name,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          spAtt: response.data.stats[3].base_stat,
          spDef: response.data.stats[4].base_stat,
          speed: response.data.stats[5].base_stat,
          total: hp + attack + defense + spAtt + spDef + speed,
        });
      }
    );
  };
  console.log(pokemonStats.types);
  return (
    <div>
      <span>{pokemonStats.hp}</span>
      <button onClick={searchPokemon}>hi</button>
    </div>
  );
};
export default Stats;
