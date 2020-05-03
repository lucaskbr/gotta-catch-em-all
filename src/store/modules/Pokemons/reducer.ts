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
  list: null,
  next: null,
  previous: null,
};

export default function pokemonsReducer(
  state = initialState,
  action: PokemonsActionTypes,
): PokemonsState | void {
  switch (action.type) {
    case GET_POKEMONS_REQUEST: {
      return { ...state, loading: true };
    }
    case GET_POKEMONS_SUCCESS: {
      const { list, previous, next } = action.payload;
      console.log(list);
      return { loading: true, list, previous, next };
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
