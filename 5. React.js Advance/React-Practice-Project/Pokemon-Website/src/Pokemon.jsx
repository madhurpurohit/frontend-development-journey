import { useEffect } from "react";
import { useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { ThreeDot } from "react-loading-indicators";
import "./index.css";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=30";

  const fetchApi = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const pokemonDetails = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = res.json();

        return data;
      });

      const responsePokemonDetails = await Promise.all(pokemonDetails);

      setPokemon(responsePokemonDetails);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const searchedData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <ThreeDot color={["#555555", "#6e6e6e", "#888888", "#a1a1a1"]} />;
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon Here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {searchedData.map((curPokemon) => {
              return (
                <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
