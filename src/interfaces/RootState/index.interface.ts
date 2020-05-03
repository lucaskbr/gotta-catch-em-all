import { PokemonsState } from '../../store/modules/Pokemons/types';
import { PokemonDetailsState } from '../../store/modules/PokemonDetails/types';

export interface RootState {
  pokemons: PokemonsState;
  pokemonDetail: PokemonDetailsState;
}
