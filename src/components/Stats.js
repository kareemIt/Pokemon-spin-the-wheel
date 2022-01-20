import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './style.css';

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

  if (pokemon == 'Darmanitan') {
    pokemon = 'darmanitan-standard';
  }
  const searchPokemon = async (pokemonName) => {
    const { data } = await Axios.get(
      'https://pokeapi.co/api/v2/pokemon/' + pokemonName
    );

    const [hp, attack, defense, spAtt, spDef, speed] = data.stats.map(
      (d) => d.base_stat
    );
    const total = hp + attack + defense + spAtt + spDef + speed;
    const typing = data.types.map((item) => item.type.name).join(' ');
    const image = data.sprites.front_default;

    setPokemonStats({
      image,
      name: pokemonName,
      type: typing,
      hp,
      attack,
      defense,
      spAtt,
      spDef,
      speed,
      total,
    });
  };

  useEffect(() => {
    if (!pokemon) return;

    searchPokemon(pokemon.toLowerCase());
  }, [pokemon]);

  const pokemonName = pokemon[0].toUpperCase() + pokemon.slice(1);

  return (
    <div>
      <div className="poke-container">
        <img src={pokemonStats.image} />
        <h2>{pokemonName}</h2>
        <span>{pokemonStats.type}</span>
      </div>
      <div className="stats-container">
        <span>Hp: {pokemonStats.hp}</span>
        <span>Attack: {pokemonStats.attack}</span>
        <span>Defenese: {pokemonStats.defense}</span>
        <span>Sp.Att: {pokemonStats.spAtt}</span>
        <span>Sp.Def: {pokemonStats.spDef}</span>
        <span>Speed: {pokemonStats.speed}</span>
        <span>Total: {pokemonStats.total}</span>
      </div>
    </div>
  );
};
export default Stats;
