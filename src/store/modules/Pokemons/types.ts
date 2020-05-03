import { Pokemon } from '../../../interfaces/Pokemon/index.interface';

export interface PokemonsState {
  list: Pokemon[] | null;
  previous: string | null;
  next: string | null;
  loading: boolean;
  errors?: string;
}

export const GET_POKEMONS_REQUEST = '@pokemons/GET_REQUEST';
export const GET_POKEMONS_SUCCESS = '@pokemons/GET_SUCCESS';
export const GET_POKEMONS_ERROR = '@pokemons/GET_ERROR';

interface GetPokemonsRequestAction {
  type: typeof GET_POKEMONS_REQUEST;
}

interface GetPokemonsSuccessAction {
  type: typeof GET_POKEMONS_SUCCESS;
  payload: any;
}

interface GetPokemonsErrorAction {
  type: typeof GET_POKEMONS_ERROR;
  payload: any;
}

export type PokemonsActionTypes =
  | GetPokemonsRequestAction
  | GetPokemonsSuccessAction
  | GetPokemonsErrorAction;
