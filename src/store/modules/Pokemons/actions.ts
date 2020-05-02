import {
  PokemonsActionTypes,
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
} from './types';

export function getPokemonsRequest(payload: any): PokemonsActionTypes {
  return {
    type: GET_POKEMONS_REQUEST,
    payload,
  };
}

export function getPokemonsSuccess(payload: any): PokemonsActionTypes {
  return {
    type: GET_POKEMONS_SUCCESS,
    payload,
  };
}

export function getPokemonsError(payload: any): PokemonsActionTypes {
  return {
    type: GET_POKEMONS_ERROR,
    payload,
  };
}
