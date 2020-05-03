import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import pokeapi from '../../services/pokeapi';
import { Pokemon } from '../../interfaces/Pokemon/index.interface';
import fromResponseToPokemon from '../../utils/mappers/responseMappers/fromResponseToPokemon';
import { Container } from './styles';
import DetailPokemon from '../../components/DetailPokemon';

import { getPokemonDetailRequest } from '../../store/modules/PokemonDetails/actions';
import { RootState } from '../../interfaces/RootState/index.interface';
import { PokemonDetailsState } from '../../store/modules/PokemonDetails/types';

const Details: React.FC = () => {
  const { id } = useParams();
  const pokemonDetails = useSelector<RootState, PokemonDetailsState>(
    (state) => state.pokemonDetails,
  );
  const dispatch = useDispatch();
  // const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  useEffect(() => {
    dispatch(getPokemonDetailRequest(id));
  }, [id]);

  return (
    <Container>
      {pokemonDetails.pokemon && (
        <DetailPokemon pokemon={pokemonDetails.pokemon} />
      )}
    </Container>
  );
};

export default Details;
