import React from 'react';

import { useSelector } from 'react-redux';
import GlobalStyle from './global';
import { RootState } from '../interfaces/RootState/index.interface';
import { PokemonDetailsState } from '../store/modules/PokemonDetails/types';

type Prop = {};

const GlobalApp: React.FC<Prop> = (props) => {
  const pokemonDetails = useSelector<RootState, PokemonDetailsState>(
    (state) => state.pokemonDetails,
  );
  return (
    <GlobalStyle background={pokemonDetails.pokemon?.types[0].info.name} />
  );
};
export default GlobalApp;
