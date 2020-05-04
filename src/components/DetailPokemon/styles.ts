import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  border: 1px solid transparent;
  border-radius: 20px;
  box-shadow: 0px 6px 20px #22222278;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PokemonImage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  h1 {
    color: #222;
    text-transform: capitalize;
    width: 100%;
    text-align: center;
  }

  h3 {
    color: #f0f4f9;
    font-size: 200px;
  }

  img {
    width: auto;
    height: 250px;
    z-index: 99;
    position: absolute;
    top: 0;
    left: -50px;
  }
`;

export const Characteristics = styled.div`
  flex: 0.4;

  h6 {
    font-weight: 300;
    color: #222;
    font-size: 18px;
    text-transform: capitalize;

    strong {
      font-weight: 600;
    }
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
  color: #222;
`;

export const Abilities = styled.div`
  display: flex;
  place-content: flex-end;
  flex-wrap: wrap;
`;
