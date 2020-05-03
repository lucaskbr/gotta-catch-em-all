import styled from 'styled-components';
import { darken } from 'polished';

const handleTypeColor = (type: string): string => {
  switch (type) {
    case 'normal':
      return '#A9A878';
    case 'fire':
      return '#F07F2F';
    case 'water':
      return '#6890F0';
    case 'grass':
      return '#78C84F';
    case 'electric':
      return '#F8D030';
    case 'poison':
      return '#A040A1';
    case 'ice':
      return '#98D8D8';
    case 'fighting':
      return '#CD6761';
    case 'ground':
      return '#E0C069';
    case 'flying':
      return '#A890F0';
    case 'rock':
      return '#B7A038';
    case 'dark':
      return '#6F5848';
    case 'psychic':
      return '#F85888';
    case 'ghost':
      return '#705798';
    case 'steel':
      return '#B8B8D0';
    case 'bug':
      return '#A8B821';
    case 'dragon':
      return '#7038F9';
    case 'fairy':
      return '#FFA3B1';
    default:
      return '#eee';
  }
};

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
  background: ${({ type }) => type && handleTypeColor(type)};
  transition: 0.5s;

  &:hover {
    background: ${({ type }) => type && darken(0.1, handleTypeColor(type))};
  }
`;

export const Text = styled.h4<{ type: string }>`
  color: ${({ type }) => type && darken(0.3, handleTypeColor(type))};
`;
