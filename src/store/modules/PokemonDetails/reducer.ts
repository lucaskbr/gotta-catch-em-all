import {
  PokemonDetailsState,
  PokemonDetailsActionTypes,
  GET_POKEMON_DETAILS_ERROR,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_SUCCESS,
} from './types';

export const initialState: PokemonDetailsState = {
  loading: false,
  errors: undefined,
  pokemon: null,
};

export default function pokemonDetails(
  state = initialState,
  action: PokemonDetailsActionTypes,
): PokemonDetailsState {
  switch (action.type) {
    case GET_POKEMON_DETAILS_REQUEST: {
      console.log('deeeeu3');
      break;
      // return { ...state, loading: true };
    }
    case GET_POKEMON_DETAILS_SUCCESS: {
      break;
      // return { ...state, loading: false, list: action.payload };
    }
    case GET_POKEMON_DETAILS_ERROR: {
      break;
      // return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
  return state;
}
