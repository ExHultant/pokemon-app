import React, { useEffect, useState } from 'react';


const PokemonDetails = ({ pokemonId }) => {
    console.log(pokemonId);

  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {    
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.params.url}`);
            const data = await response.json();
            setPokemonDetails(data);
      } catch (error) {
        console.log('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, []);

  if (!pokemonDetails) {
    return <div>Hola</div>;
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
export default PokemonDetails;