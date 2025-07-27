import { useEffect, useState } from "react";
import "./pokemon.css";

export const RightWayToFetchApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  //* Fetch API Using Promises.
  // const fetchPokemon=()=> {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPokemon(data);
  //       setLoading(false);
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //       setError(error);
  //       console.log(error);
  //     });
  // }

  //* Fetch API Using Async Await.

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(!pokemon);

  //* Handle Loading Screen without state.
  // if (!pokemon) {
  //   console.log("Pokemon is getting");
  //   return (
  //     <div className="container">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  //* Handle Loading Screen with state.
  if (loading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  //* Handle Error with state.
  if (error) {
    return (
      <div className="container">
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  // if (pokemon) {
  return (
    <>
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="pokemon-image"
              />
            </figure>
            <h1>{pokemon.name}</h1>
            <div className="grid-three-cols">
              <p className="pokemon-info">
                Height: <span> {pokemon.height} </span>
              </p>
              <p className="pokemon-info">
                Weight: <span> {pokemon.weight}</span>
              </p>
              <p className="pokemon-info">
                speed: <span>{pokemon.stats[5].base_stat}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
  // }
};
