import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  margin: 5px;
  border: 1px solid transparent;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100%;
  max-width: 200px;

  &:hover {
    box-shadow: 0px 6px 10px #d4d4d4;
  }
`;

export const Image = styled.img`
  max-width: 96px;
  max-height: 96px;
`;

export const Name = styled.h1`
  font-size: 16px;
  text-transform: capitalize;
`;

export const Id = styled.h2`
  font-size: 16px;
`;
