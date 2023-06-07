import React, { useEffect, useState } from 'react';
import { Pokemon } from './Pokemon';

export const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        const fetchPokemonList = async () => {
          try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await response.json();
            setPokemonList(data.results);
          } catch (error) {
            console.log('Error fetching Pokemon list:', error);
          }
        };
        fetchPokemonList();
      }, []);
      const [currentPage, setCurrentPage] = useState(1);
      const [pageSize, setPageSize] = useState(10);
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const handlePreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
      const handleNextPage = () => {
        const maxPage = Math.ceil(pokemonList.length / pageSize);
        if (currentPage < maxPage) {
          setCurrentPage(currentPage + 1);
        }
      };            
      return (
        <div>
          <h1>Pokémon List</h1>
          <ul>
            {pokemonList.slice(startIndex, endIndex).map((pokemon) => (
              <Pokemon key={pokemon.name} name={pokemon.name} />
            ))}
          </ul>
        </div>
      );
  };
