import React, { FormEvent, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, Logo, Form, Search, SearchButton } from './styles';
import PokedexImg from '../../assets/pokedex.png';

type Prop = {};

const Header: React.FC<Prop> = (props) => {
  const history = useHistory();
  const [search, setSearch] = useState('');

  async function handleForm(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (search.length <= 0) {
      return;
    }
    history.push(`/details/${search}`);
  }

  return (
    <Container>
      <Logo src={PokedexImg} alt="pokedex" />
      <Form onSubmit={handleForm}>
        <Search
          type="text"
          placeholder="Example: Pikachu or 25"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <SearchButton>Find</SearchButton>
      </Form>
    </Container>
  );
};

export default Header;
