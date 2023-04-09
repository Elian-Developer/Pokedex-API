import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext"
import { useForm } from "../hooks/useForm";

export const PokemonProvider = ({ children }) => {

    const [allPokemon, setAllPokemon] = useState([]);
    const [globalPokemon, setGlobalPokemon] = useState([]);
    const [offset, setOffset] = useState(0);

    //Custom Hook for Search pokemon
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4487c56eb699b914c16f5db2163fb0c9ad269972
    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: ''
    })
   
<<<<<<< HEAD
=======
    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: ''
    })

>>>>>>> fca2f15 (Tercer commit)
=======
>>>>>>> 4487c56eb699b914c16f5db2163fb0c9ad269972
    // State for the app
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    // Call 100 Pokemon to API
<<<<<<< HEAD
<<<<<<< HEAD
    const getAllPokemon = async(limit = 100) => {
=======
    const getAllPokemon = async (limit = 100) => {
>>>>>>> fca2f15 (Tercer commit)
=======
    const getAllPokemon = async(limit = 100) => {
>>>>>>> 4487c56eb699b914c16f5db2163fb0c9ad269972
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();
<<<<<<< HEAD
<<<<<<< HEAD
        
        const promises = data.results.map(async(pokemon) => {
=======

        const promises = data.results.map(async (pokemon) => {
>>>>>>> fca2f15 (Tercer commit)
=======
        
        const promises = data.results.map(async(pokemon) => {
>>>>>>> 4487c56eb699b914c16f5db2163fb0c9ad269972
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        setAllPokemon([...allPokemon, ...results]);
        setLoading(false);
    }

    // Call All Pokemon
<<<<<<< HEAD
<<<<<<< HEAD
    const getGlobalPokemon = async() => {
=======
    const getGlobalPokemon = async () => {
>>>>>>> fca2f15 (Tercer commit)
=======
    const getGlobalPokemon = async() => {
>>>>>>> 4487c56eb699b914c16f5db2163fb0c9ad269972
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
        const data = await res.json();
<<<<<<< HEAD
<<<<<<< HEAD
        
        const promises = data.results.map(async(pokemon) => {
=======

        const promises = data.results.map(async (pokemon) => {
>>>>>>> fca2f15 (Tercer commit)
=======
        
        const promises = data.results.map(async(pokemon) => {
>>>>>>> 4487c56eb699b914c16f5db2163fb0c9ad269972
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        setGlobalPokemon(results);
        setLoading(false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
    
=======

>>>>>>> fca2f15 (Tercer commit)
=======
    
>>>>>>> 4487c56eb699b914c16f5db2163fb0c9ad269972
    //This function call a pokemon by ID
    const getPokemonById = async (id) => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json();
        return data;
<<<<<<< HEAD
<<<<<<< HEAD
    } 
=======
    }
>>>>>>> fca2f15 (Tercer commit)
=======
    } 
>>>>>>> 4487c56eb699b914c16f5db2163fb0c9ad269972

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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4487c56eb699b914c16f5db2163fb0c9ad269972
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
<<<<<<< HEAD
=======
    // Filter Function + State
    const [typeSelected, setTypeSelected] = useState({
        grass: false,
        normal: false,
        fighting: false,
        flying: false,
        poison: false,
        ground: false,
        rock: false,
        bug: false,
        ghost: false,
        steel: false,
        fire: false,
        water: false,
        electric: false,
        psychic: false,
        ice: false,
        dragon: false,
        dark: false,
        fairy: false,
        unknow: false,
        shadow: false,
    })

    const [filteredPokemons, setfilteredPokemons] = useState([])

    const handleCheckbox = e => {
        setTypeSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked,
        })

        if (e.target.checked) {
            const filteredResults = globalPokemons.filter(pokemon =>
                pokemon.types
                .map(type => type.type.name)
                .includes(e.target.name)
            )
            console.log(filteredResults)
        }

    }

    return (
        <PokemonContext.Provider
            value={{
                valueSearch,
                onInputChange,
                onResetForm,
                allPokemon,
                globalPokemon,
                getPokemonById,
                onClickLoadMore,
                // Loader
                loading,
                setLoading,
                // Btn Filter
                active,
                setActive,
                //Filter Container Checkbox
                handleCheckbox,
                filteredPokemons
            }}
>>>>>>> fca2f15 (Tercer commit)
=======
>>>>>>> 4487c56eb699b914c16f5db2163fb0c9ad269972
        >
            {children}
        </PokemonContext.Provider>
    )
}