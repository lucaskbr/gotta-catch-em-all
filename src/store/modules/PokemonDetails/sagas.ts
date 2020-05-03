import { takeLatest, all, call, put } from 'redux-saga/effects';
import pokeapi from '../../../services/pokeapi';
import {
  PokemonDetailsActionTypes,
  GET_POKEMON_DETAILS_REQUEST,
} from './types';
import fromResponseToPokemonDetails from '../../../utils/mappers/responseMappers/fromResponseToPokemon';
import { getPokemonDetailSuccess } from './actions';

function* getPokemonDetails({ payload }: PokemonDetailsActionTypes): any {
  const response = yield call(pokeapi.get, `/pokemon/${payload.id}`);

  const pokemon = fromResponseToPokemonDetails(response.data);

  yield put(getPokemonDetailSuccess(pokemon));
}

export default all([
  takeLatest(GET_POKEMON_DETAILS_REQUEST, getPokemonDetails),
]);
