import { all } from 'redux-saga/effects';

import pokemons from './Pokemons/sagas';
import pokemonDetails from './PokemonDetails/sagas';

export default function* rootSaga(): any {
  return yield all([pokemons, pokemonDetails]);
}
