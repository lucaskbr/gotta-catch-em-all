import { takeLatest, all } from 'redux-saga/effects';
import { GET_POKEMONS_REQUEST } from './types';

function* getPokemons(): any {
  yield console.log('buscando pokes');
}

export default all([takeLatest(GET_POKEMONS_REQUEST, getPokemons)]);
