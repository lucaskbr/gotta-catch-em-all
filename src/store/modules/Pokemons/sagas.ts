import { takeLatest, all, call, put } from 'redux-saga/effects';
import { GET_POKEMONS_REQUEST } from './types';
import pokeapi from '../../../services/pokeapi';
import { getPokemonsSuccess } from './actions';
import fromResponseToPokemonDetails from '../../../utils/mappers/responseMappers/fromResponseToPokemon';

function* getPokemons(): any {
  const pokemonList = yield call(pokeapi.get, `/pokemon?limit=20`);

  const { results, next, previous } = pokemonList.data;

  const promises = [];

  for (let i = 0; i < results.length; i += 1) {
    promises.push(call(pokeapi.get, `/pokemon/${results[i].name}`));
  }

  const promisesResult = yield all(promises);

  const pokemons = promisesResult.map((response: any) =>
    fromResponseToPokemonDetails(response.data),
  );

  yield put(getPokemonsSuccess(pokemons, next, previous));
}

export default all([takeLatest(GET_POKEMONS_REQUEST, getPokemons)]);
