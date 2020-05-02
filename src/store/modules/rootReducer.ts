import { combineReducers } from 'redux';

import pokemons from './Pokemons/reducer';
import pokemonDetails from './PokemonDetails/reducer';

export default combineReducers({ pokemons, pokemonDetails });
