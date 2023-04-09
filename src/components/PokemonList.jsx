import React, { useContext } from "react";
import { PokemonContext } from "../Context/PokemonContext";
import { CardPokemon } from "./CardPokemon";

export const PokemonList = () => {

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4487c56eb699b914c16f5db2163fb0c9ad269972
    const {allPokemon} = useContext(PokemonContext)

    return (
        <>
            <div className="card-list-pokemon container">
                {allPokemon.map(pokemon => (<CardPokemon pokemon={pokemon} key={pokemon.id} />))}
            </div>
<<<<<<< HEAD
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
=======
>>>>>>> 4487c56eb699b914c16f5db2163fb0c9ad269972
        </>
    )
}