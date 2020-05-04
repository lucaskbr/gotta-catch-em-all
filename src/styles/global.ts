import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import { handlePokemonTypeColor } from './handleColor';

const GlobalStyle = createGlobalStyle<{ background?: string }>`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) =>
      props.background
        ? darken(0.1, handlePokemonTypeColor(props.background))
        : '#E7E9F5'};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px "Open sans", sans-serif;
  }
  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

`;

export default GlobalStyle;
