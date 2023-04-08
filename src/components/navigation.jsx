import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { PokemonContext } from '../Context/PokemonContext';

export const Navigation = () => {

  const {} = useContext(PokemonContext)
 

  return (
    <>
      <header className='container'>
        <Link href='/' className='logo'>
          <img
            src='https://assets.pokemon.com/assets/cms2-es-xl/img/misc/gus/buttons/logo-pokemon-79x45.png'
            alt='Logo Pokedex'
          />
        </Link>
        <form>
          <div className='form-group'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='icon-search'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
            <input
              type='search'
              name='valueSearch'
              id=''
              placeholder='Search by pokemon Name'
            />
          </div>

          <button className='btn-search'>Search</button>
        </form>
      </header>
      <Outlet />
    </>
  );
};
