import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Pokemon = ({ name }) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  const handleClick = () => {
    setSelectedPokemonId(name);
  };
  return (
    <li>
      {name}
      {/* <Link to={`/pokemon/${name}`}>{name}</Link> */}
    </li>
  );
};