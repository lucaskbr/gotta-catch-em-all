import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  height: 75px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;

export const Search = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const SearchButton = styled.button.attrs({
  type: 'submit',
})`
  width: 100%;
  max-width: 200px;
  background: #2acd72;
  border: 1px solid transparent;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: #fff;
  font-weight: 600px;
  transition: 0.5s;

  &:hover {
    background: #1bb55d;
  }
`;
