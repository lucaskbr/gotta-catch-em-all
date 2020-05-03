import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import pokeapi from '../../services/pokeapi';
import { Pokemon } from '../../interfaces/Pokemon/index.interface';
import fromResponseToPokemon from '../../utils/mappers/responseMappers/fromResponseToPokemon';
import { Container } from './styles';
import DetailPokemon from '../../components/DetailPokemon';

import { getPokemonDetailRequest } from '../../store/modules/PokemonDetails/actions';

const Details: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await pokeapi.get(`/pokemon/${id}`);

      const { data } = response;

      setPokemon(fromResponseToPokemon(data));
    }
    fetchData();
    dispatch(getPokemonDetailRequest(id));
  }, []);

  return (
    <Container>
      {pokemon !== undefined && <DetailPokemon pokemon={pokemon} />}
    </Container>
  );
};

export default Details;
