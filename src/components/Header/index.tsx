import React, { FormEvent, useState } from 'react';

import { Container, Logo, Form, Search, SearchButton } from './styles';
import PokedexImg from '../../assets/pokedex.png';
import pokeapi from '../../services/pokeapi';
import { Pokemon } from '../../interfaces/Pokemon/index.interface';
import fromResponseToPokemon from '../../utils/mappers/responseMappers/fromResponseToPokemon';

type Prop = {};

const Header: React.FC<Prop> = (props) => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  async function handleForm(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await pokeapi.get(`/pokemon/charmander`);

    const { data } = response;

    console.log(data);

    setPokemon(fromResponseToPokemon(data));
  }

  return (
    <Container>
      <Logo src={PokedexImg} alt="pokedex" />
      <Form onSubmit={handleForm}>
        <Search
          type="text"
          placeholder="Pikachu"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <SearchButton>Find</SearchButton>
      </Form>
    </Container>
  );
};

export default Header;
