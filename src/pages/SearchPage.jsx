import React, { useContext } from 'react';
import { PokemonContext } from '../Context/PokemonContext';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';

export const SearchPage = () => {

    const location = useLocation()

    const{globalPokemon} = useContext(PokemonContext)

    const filteredPokemon = globalPokemon.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))

    return(
        <div className='container'>
            <p className="p-search">
                We Found <span>{filteredPokemon.length}</span> results:
            </p>
            <div className='card-list-pokemon container'>
                {filteredPokemon.map(pokemon => (<CardPokemon pokemon={pokemon} key={pokemon.id}/>))}
            </div>
        </div>
    )
}