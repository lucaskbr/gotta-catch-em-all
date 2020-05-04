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
    if (rootState.pokemons.list) return;
    dispatch(getPokemonsRequest());
  }, []);

  async function handleNext(): Promise<void> {
    const { next } = rootState.pokemons;
    dispatch(getPokemonsRequest(next));
  }

  async function handlePrevious(): Promise<void> {
    const { previous } = rootState.pokemons;
    if (!previous) return;
    dispatch(getPokemonsRequest(previous));
  }

  async function handleClick(id: string | number): Promise<void> {
    history.push(`/details/${id}`);
  }

  return (
    <Container>
      <PokemonList>
        {rootState.pokemons.list?.map((pokemon) => (
          <CardPokemon
            pokemon={pokemon}
            onClick={() => handleClick(pokemon.id)}
          />
        ))}
      </PokemonList>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </Container>
  );
};

export default Home;
