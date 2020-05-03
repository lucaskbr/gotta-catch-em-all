import styled from 'styled-components';
import { darken } from 'polished';
import { handlePokemonTypeColor } from '../../../styles/handleColor';

export const Container = styled.div<{ type: string }>`
  display: flex;
  place-content: center;
  width: 100%;
  max-width: 150px;
  padding: 6px 30px;
  margin: 2px;
  height: 100%;
  cursor: pointer;

  border: 1px solid transparent;
  border-radius: 5px;
  background: ${({ type }) => type && handlePokemonTypeColor(type)};
  transition: 0.5s;

  &:hover {
    background: ${({ type }) =>
      type && darken(0.1, handlePokemonTypeColor(type))};
  }
`;

export const Text = styled.h4<{ type: string }>`
  color: ${({ type }) => type && darken(0.3, handlePokemonTypeColor(type))};
`;
