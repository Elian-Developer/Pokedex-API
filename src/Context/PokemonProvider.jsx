import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext"
import { useForm } from "../hooks/useForm";

export const PokemonProvider = ({ children }) => {

    const [allPokemon, setAllPokemon] = useState([]);
    const [globalPokemon, setGlobalPokemon] = useState([]);
    const [offset, setOffset] = useState(0);

    //Custom Hook for Search pokemon
    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: ''
    })
   
    // State for the app
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    // Call 100 Pokemon to API
    const getAllPokemon = async(limit = 100) => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();
        
        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        setAllPokemon([...allPokemon, ...results]);
        setLoading(false);
    }

    // Call All Pokemon
    const getGlobalPokemon = async() => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
        const data = await res.json();
        
        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        setGlobalPokemon(results);
        setLoading(false);
    }
    
    //This function call a pokemon by ID
    const getPokemonById = async (id) => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json();
        return data;
    } 

    //This useEffect call first 100 pokemon function 
    useEffect(() => {
        getAllPokemon()
    }, [offset])

    // This UseEffect call all pokemon
    useEffect(() => {
        getGlobalPokemon()
    }, [])

    // Btn Load More
    const onClickLoadMore = () => {
        setOffset(offset + 25)
    }

    return(
        <PokemonContext.Provider 
        value={{
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemon,
            globalPokemon,
            getPokemonById,
            onClickLoadMore
        }}
        >
            {children}
        </PokemonContext.Provider>
    )
}