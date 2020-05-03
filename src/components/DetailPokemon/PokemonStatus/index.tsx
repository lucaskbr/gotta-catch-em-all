import React from 'react';
import { Stat } from '../../../interfaces/Pokemon/Stat.interface';

import { Container, Text } from './styles';

interface PokemonStatusProps {
  status: Stat;
}

const PokemonStatus: React.FC<PokemonStatusProps> = ({
  status,
}: PokemonStatusProps) => {
  return (
    <Container>
      <Text>{`${status.info.name}: ${status.baseStat}`}</Text>
    </Container>
  );
};

export default PokemonStatus;
