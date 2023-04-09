import React, { useContext } from "react";
import { PokemonContext } from "../Context/PokemonContext";
import { CardPokemon } from "./CardPokemon";

export const PokemonList = () => {

<<<<<<< HEAD
    const {allPokemon} = useContext(PokemonContext)

    return (
        <>
            <div className="card-list-pokemon container">
                {allPokemon.map(pokemon => (<CardPokemon pokemon={pokemon} key={pokemon.id} />))}
            </div>
=======
    const { allPokemon, loading } = useContext(PokemonContext)

    return (
        <>
            {loading ? (
                    <loader />
                ) : (
                    <div className="card-list-pokemon container">
                        {allPokemon.map(pokemon => (
                            <CardPokemon pokemon={pokemon} key={pokemon.id} />
                        ))}
                    </div>
                )}
>>>>>>> fca2f15 (Tercer commit)
        </>
    )
}