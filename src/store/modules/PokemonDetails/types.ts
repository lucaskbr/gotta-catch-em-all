import { Pokemon } from '../../../interfaces/Pokemon/index.interface';

export interface PokemonDetailsState {
  pokemon: Pokemon | null;
  loading: boolean;
  errors?: string;
}

export const GET_POKEMON_DETAILS_REQUEST = '@pokemonDetails/GET_REQUEST';

export const GET_POKEMON_DETAILS_SUCCESS = '@pokemonDetails/GET_SUCCESS';

export const GET_POKEMON_DETAILS_ERROR = '@pokemonDetails/GET_ERROR';

interface GetPokemonsDetailsRequestAction {
  type: typeof GET_POKEMON_DETAILS_REQUEST;
  payload: {
    id: string | number;
  };
}

interface GetPokemonsDetailsSuccessAction {
  type: typeof GET_POKEMON_DETAILS_SUCCESS;
  payload: {
    pokemon: Pokemon;
  };
}

interface GetPokemonsDetailsErrorAction {
  type: typeof GET_POKEMON_DETAILS_ERROR;
  payload: any;
}

export type PokemonDetailsActionTypes =
  | GetPokemonsDetailsRequestAction
  | GetPokemonsDetailsSuccessAction
  | GetPokemonsDetailsErrorAction;
