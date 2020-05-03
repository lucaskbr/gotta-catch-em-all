import React from 'react';

import { Container, Text } from './styles';

interface PokemonTypeProps {
  type: string;
}

const PokemonType: React.FC<PokemonTypeProps> = ({
  type,
}: PokemonTypeProps) => {
  return (
    <Container type={type}>
      <Text type={type}>{type}</Text>
    </Container>
  );
};

export default PokemonType;
