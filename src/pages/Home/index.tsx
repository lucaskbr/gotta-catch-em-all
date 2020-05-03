import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPokemonsRequest } from '../../store/modules/Pokemons/actions';
import { RootState } from '../../interfaces/RootState/index.interface';
import CardPokemon from '../../components/CardPokemon';
import { Container, PokemonList } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rootState = useSelector<RootState, RootState>((state) => state);

  useEffect(() => {
    if (rootState.pokemons.list !== null) return;
    dispatch(getPokemonsRequest());
  }, []);

  function handleClick(pokemonName: string | number): void {
    history.push(`/details/${pokemonName}`);
  }

  return (
    <Container>
      <div>Home</div>
      <PokemonList>
        {rootState.pokemons.list?.map((pokemon) => (
          <CardPokemon
            pokemon={pokemon}
            onClick={() => handleClick(pokemon.id)}
          />
        ))}
      </PokemonList>
    </Container>
  );
};

export default Home;
