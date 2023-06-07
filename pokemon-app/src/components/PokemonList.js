import React, { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";
import PokemonDetails from "./PokemonDetails";
import "bootstrap/dist/css/bootstrap.min.css";

export const PokemonList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedPokemonId, setSelectedPokemonId] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.log("Error fetching Pokemon list:", error);
      }
    };
    fetchPokemonList();
  }, []);

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

  const handlePokemonClick = (pokemonId) => {
    setSelectedPokemonId(pokemonId);
    console.log(pokemonId);
  };

  console.log(selectedPokemonId);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <h1>Pokémon List</h1>
          <ul className="list-group">
            {pokemonList.slice(startIndex, endIndex).map((pokemon) => (
              <Pokemon
                key={pokemon.name}
                name={pokemon.name}
                onClick={() => {
                  console.log(pokemon);
                  handlePokemonClick(pokemon.url)
                }}
              />
            ))}
          </ul>
          <button onClick={handlePreviousPage}>Anterior</button>
          <button onClick={handleNextPage}>Siguiente</button>
        </div>
        <div className="col-lg-9">
          <h1>Pokemon Details</h1>
          {/* <PokemonDetails pokemonId={selectedPokemonId} /> */}
        </div>
      </div>
    </div>
  );
};
