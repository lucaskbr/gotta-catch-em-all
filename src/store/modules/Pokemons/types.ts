export interface Pokemons {
  list: {
    name: string;
    url: string;
  }[];
  previous: string | null;
  next: string | null;
}

export interface PokemonsState {
  pokemons: Pokemons | null;
  loading: boolean;
  errors?: string;
}

export const GET_POKEMONS_REQUEST = '@pokemons/GET_POKEMONS_REQUEST';
export const GET_POKEMONS_SUCCESS = '@pokemons/GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_ERROR = '@pokemons/GET_POKEMONS_ERROR';

interface GetPokemonsRequestAction {
  type: typeof GET_POKEMONS_REQUEST;
  payload: any;
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
