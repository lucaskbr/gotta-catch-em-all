import {
  PokemonDetailsActionTypes,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_SUCCESS,
  GET_POKEMON_DETAILS_ERROR,
} from './types';
import { Pokemon } from '../../../interfaces/Pokemon/index.interface';

export function getPokemonDetailRequest(
  id: string | number,
): PokemonDetailsActionTypes {
  return {
    type: GET_POKEMON_DETAILS_REQUEST,
    payload: {
      id,
    },
  };
}

export function getPokemonDetailSuccess(
  pokemon: Pokemon,
): PokemonDetailsActionTypes {
  return {
    type: GET_POKEMON_DETAILS_SUCCESS,
    payload: {
      pokemon,
    },
  };
}

export function getPokemonDetailError(payload: any): PokemonDetailsActionTypes {
  return {
    type: GET_POKEMON_DETAILS_ERROR,
    payload,
  };
}
