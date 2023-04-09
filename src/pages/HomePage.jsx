import React, { useContext } from 'react';
import {FilterBar, PokemonList } from '../components';
import { PokemonContext } from '../Context/PokemonContext';

export const HomePage = () => {

  const {onClickLoadMore, active, setActive} = useContext(PokemonContext)


  //For showing the filter section
  return (
    <>
      <div className='container-filter container'>
        
        <div className='icon-filter' onClick={()=>setActive(!active)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='icon'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
            />
          </svg>
          <span className='filter'>Filter by Types</span>
        </div>
      </div>
      <PokemonList />
      <FilterBar />
      <div className='container-btn-load-more container'>
          <button className='btn-load-more' onClick={onClickLoadMore}>
              View more...
          </button>
      </div>
    </>
  );
};
