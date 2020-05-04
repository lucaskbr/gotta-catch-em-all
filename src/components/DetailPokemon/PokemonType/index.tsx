import React from 'react';

import { Container, Text } from './styles';

interface PokemonTypeProps {
  type: string;
  onClick?: any;
}

const PokemonType: React.FC<PokemonTypeProps> = ({
  type,
  onClick,
}: PokemonTypeProps) => {
  return (
    <Container type={type} onClick={onClick}>
      <Text type={type}>{type}</Text>
    </Container>
  );
};

export default PokemonType;
