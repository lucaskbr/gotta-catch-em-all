import { Pokemon } from '../../../interfaces/Pokemon/index.interface';

export interface PokemonDetailsState {
  pokemon: Pokemon | null;
  loading: boolean;
  errors?: string;
}

export const GET_POKEMON_DETAILS_REQUEST =
  '@pokemonDetails/GET_POKEMON_REQUEST';

export const GET_POKEMON_DETAILS_SUCCESS =
  '@pokemonDetails/GET_POKEMON_SUCCESS';

export const GET_POKEMON_DETAILS_ERROR = '@pokemonDetails/GET_POKEMON_ERROR';

interface GetPokemonsDetailsRequestAction {
  type: typeof GET_POKEMON_DETAILS_REQUEST;
  payload: any;
}

interface GetPokemonsDetailsSuccessAction {
  type: typeof GET_POKEMON_DETAILS_SUCCESS;
  payload: any;
}

interface GetPokemonsDetailsErrorAction {
  type: typeof GET_POKEMON_DETAILS_ERROR;
  payload: any;
}

export type PokemonDetailsActionTypes =
  | GetPokemonsDetailsRequestAction
  | GetPokemonsDetailsSuccessAction
  | GetPokemonsDetailsErrorAction;
