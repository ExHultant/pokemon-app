import React, { useEffect, useState } from 'react';


const PokemonDetails = ({ pokemonId }) => {
    console.log(pokemonId);

  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {    
            const response = await fetch(pokemonId);
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
console.log(pokemonDetails);
  return (
    <div>
      <h3>{pokemonDetails.name.toUpperCase()}</h3>
      <p>Weight: {pokemonDetails.weight}</p>
      <p>Height: {pokemonDetails.height}</p>
      <p>Abilities: {pokemonDetails.abilities.map(({ability}) => ability.name).join(', ')}</p> 
      <p>Type: {pokemonDetails.types.map(({type}) => type.name).join(', ')}</p> 
      <p>ID: {pokemonDetails.id}</p>
      <p>Base XP: {pokemonDetails.base_experience}</p> 
    </div>
  );
};
export default PokemonDetails;