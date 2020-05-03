import React from 'react';

import { Container, Image, Name, Id } from './styles';
import { Pokemon } from '../../interfaces/Pokemon/index.interface';

interface CardPokemonProps {
  pokemon: Pokemon;
  onClick?: any;
}

const CardPokemon: React.FC<CardPokemonProps> = ({
  pokemon,
  onClick,
}: CardPokemonProps) => {
  return (
    <Container onClick={onClick}>
      <Image src={pokemon.sprites.frontDefault} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
      <Id>{`#${pokemon.id}`}</Id>
    </Container>
  );
};

export default CardPokemon;
