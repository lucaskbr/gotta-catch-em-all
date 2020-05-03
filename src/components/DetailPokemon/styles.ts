import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #f8d030;
  padding: 10px;
`;

export const Header = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Characteristics = styled.div`
  flex: 0.4;

  h3 {
    color: #fff;
    opacity: 0.4;
    font-size: 120px;
  }

  h6 {
    font-weight: 300;
    color: #fff;
    font-size: 18px;
    text-transform: capitalize;

    strong {
      font-weight: 600;
    }
  }
`;

export const PokemonImage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    color: #fff;
    text-transform: capitalize;
    width: 100%;
    text-align: center;
  }

  img {
    width: auto;
    height: 250px;
    z-index: 99;
    position: relative;
  }
`;

export const Types = styled.div`
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Status = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  place-content: center;
`;

export const BaseStatus = styled.h1`
  color: #fff;
`;

export const Abilities = styled.div`
  display: flex;
  place-content: flex-end;
  flex-wrap: wrap;
`;
