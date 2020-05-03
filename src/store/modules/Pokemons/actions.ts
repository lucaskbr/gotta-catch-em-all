import {
  PokemonsActionTypes,
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
} from './types';

export function getPokemonsRequest(): PokemonsActionTypes {
  return {
    type: GET_POKEMONS_REQUEST,
  };
}

export function getPokemonsSuccess(
  list: any,
  next: string,
  previous: string,
): PokemonsActionTypes {
  return {
    type: GET_POKEMONS_SUCCESS,
    payload: { list, next, previous },
  };
}

export function getPokemonsError(payload: any): PokemonsActionTypes {
  return {
    type: GET_POKEMONS_ERROR,
    payload,
  };
}
