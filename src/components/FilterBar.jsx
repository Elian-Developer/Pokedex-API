import React, { useContext } from 'react';
import { PokemonContext } from '../Context/PokemonContext';

export const FilterBar = () => {

  const {active, handleCheckbox} = useContext(PokemonContext)

  return (
    <div className={`container-filters ${active ? 'active' : ''}`}>
      <div className='filter-by-type'>
        <span>Types</span>

        <div class='group-type'>
          <input type='checkbox'  name='grass' id='grass'  onChange={handleCheckbox}/>
          <label htmlFor='grass'>Grass</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='fire' id='fire' onChange={handleCheckbox}/>
          <label htmlFor='fire'>Fire</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='bug' id='bug' onChange={handleCheckbox}/>
          <label htmlFor='bug'>Bug</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='fairy' id='fairy' onChange={handleCheckbox}/>
          <label htmlFor='fairy'>Fairy</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='dragon' id='dragon' onChange={handleCheckbox}/>
          <label htmlFor='dragon'>Dragon</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='shadow' id='shadow' onChange={handleCheckbox}/>
          <label htmlFor='shadow'>Shadow</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='ground' id='ground' onChange={handleCheckbox}/>
          <label htmlFor='ground'>Ground</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='normal' id='normal' onChange={handleCheckbox}/>
          <label htmlFor='normal'>Normal</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='psychic' id='psychic' onChange={handleCheckbox}/>
          <label htmlFor='psychic'>Psychic</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='steel' id='steel' onChange={handleCheckbox}/>
          <label htmlFor='steel'>steel</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='dark' id='dark' onChange={handleCheckbox}/>
          <label htmlFor='dark'>Dark</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='electric' id='electric' onChange={handleCheckbox}/>
          <label htmlFor='electric'>Electric</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='fighting' id='fighting' onChange={handleCheckbox}/>
          <label htmlFor='fighting'>Fighting</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='flying' id='flying' onChange={handleCheckbox}/>
          <label htmlFor='flying'>Flying</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='ice' id='ice' onChange={handleCheckbox}/>
          <label htmlFor='ice'>Ice</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='poison' id='poison' onChange={handleCheckbox}/>
          <label htmlFor='poison'>Poison</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='rock' id='rock' onChange={handleCheckbox}/>
          <label htmlFor='rock'>Rock</label>
        </div>
        <div class='group-type'>
          <input type='checkbox'  name='water' id='water' onChange={handleCheckbox}/>
          <label htmlFor='water'>Water</label>
        </div>
      </div>
    </div>
  );
  
};
