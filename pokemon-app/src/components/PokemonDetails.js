import React, { useEffect, useState } from 'react';

export const PokemonDetails = ({ match }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const pokemonId = match.params.id;

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.log('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonId]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemonDetails.name}</h2>
      <p>Weight: {pokemonDetails.weight}</p>
      <p>Height: {pokemonDetails.height}</p>
      <p>Abilities: {pokemonDetails.abilities.map((ability) => ability.name).join(', ')}</p>
    </div>
  );
};