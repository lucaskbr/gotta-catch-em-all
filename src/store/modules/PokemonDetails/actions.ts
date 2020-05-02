import {
  PokemonDetailsActionTypes,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_SUCCESS,
  GET_POKEMON_DETAILS_ERROR,
} from './types';

export function getPokemonsRequest(payload: any): PokemonDetailsActionTypes {
  return {
    type: GET_POKEMON_DETAILS_REQUEST,
    payload,
  };
}

export function getPokemonsSuccess(payload: any): PokemonDetailsActionTypes {
  return {
    type: GET_POKEMON_DETAILS_SUCCESS,
    payload,
  };
}

export function getPokemonsError(payload: any): PokemonDetailsActionTypes {
  return {
    type: GET_POKEMON_DETAILS_ERROR,
    payload,
  };
}
