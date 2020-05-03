import React from 'react';
import { Pokemon } from '../../interfaces/Pokemon/index.interface';

import {
  Container,
  Header,
  Types,
  BaseStatus,
  Status,
  Body,
  Characteristics,
  Abilities,
  PokemonImage,
} from './styles';
import PokemonType from './PokemonType';
import PokemonStatus from './PokemonStatus';

interface DetailPokemonProps {
  pokemon: Pokemon;
}

const DetailPokemon: React.FC<DetailPokemonProps> = ({
  pokemon,
}: DetailPokemonProps) => {
  return (
    <Container>
      <Header>
        <Characteristics>
          <h3>{`#${pokemon?.id}`}</h3>
          <h6>
            <strong>Height:</strong>
            {` ${pokemon?.height}`}
          </h6>
          <h6>
            <strong>Weight:</strong>
            {` ${pokemon?.weight}`}
          </h6>
        </Characteristics>
        <PokemonImage>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            alt="teste"
          />
          <h1>{pokemon?.name}</h1>
          <Types>
            {pokemon.types.map((type) => (
              <PokemonType type={type.info.name} />
            ))}
          </Types>
        </PokemonImage>
        <Status>
          <BaseStatus>Base status:</BaseStatus>
          {pokemon.stats.map((stat) => (
            <PokemonStatus key={stat.info.name} status={stat} />
          ))}
        </Status>
      </Header>
      <Body />
    </Container>
  );
};

export default DetailPokemon;

/**
 *  <Abilities>
        {pokemon.abilities.map((ability) => (
          <div>
            <h5>{ability.info.name}</h5>
          </div>
        ))}
      </Abilities>
 */
