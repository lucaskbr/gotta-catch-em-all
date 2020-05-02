import {
  PokemonsState,
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
  PokemonsActionTypes,
} from './types';

export const initialState: PokemonsState = {
  loading: false,
  errors: undefined,
  pokemons: null,
};

export default function pokemons(
  state = initialState,
  action: PokemonsActionTypes,
): PokemonsState {
  switch (action.type) {
    case GET_POKEMONS_REQUEST: {
      console.log('deeeeu2');
      break;
      // return { ...state, loading: true };
    }
    case GET_POKEMONS_SUCCESS: {
      break;
      // return { ...state, loading: false, list: action.payload };
    }
    case GET_POKEMONS_ERROR: {
      break;
      // return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
  return state;
}
