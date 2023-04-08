import React, { useContext } from "react";
import { PokemonContext } from "../Context/PokemonContext";
import { CardPokemon } from "./CardPokemon";

export const PokemonList = () => {

    const {allPokemon} = useContext(PokemonContext)

    return (
        <>
            <div className="card-list-pokemon container">
                {allPokemon.map(pokemon => (<CardPokemon pokemon={pokemon} key={pokemon.id} />))}
            </div>
        </>
    )
}