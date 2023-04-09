import React, { useContext } from "react";
import { PokemonContext } from "../Context/PokemonContext";
import { CardPokemon } from "./CardPokemon";
import { Loader } from './Loader';

export const PokemonList = () => {

    const { allPokemon, loading, filteredPokemons } = useContext(PokemonContext)

    return (
        <>
			{loading ? (
				<Loader />
			) : (
				<div className='card-list-pokemon container'>
					{filteredPokemons.length ? (
						<>
							{filteredPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					) : (
						<>
							{allPokemon.map(pokemon => (<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					)}
				</div>
			)}
		</>
    )
}


