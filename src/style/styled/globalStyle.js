import { createGlobalStyle } from 'styled-components';
import exo from '../../../public/fonts/Exo2.0-Thin.otf';
import trebuchet from '../../../public/fonts/trebuchetms.ttf';

export const GlobalStyleComponent = createGlobalStyle`
  @font-face {
    font-family: 'Exo2.0';
    src: url(${exo}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Trebuchet';
    src: url(${trebuchet}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Trebuchet', sans-serif;
    & button {
      cursor: pointer;
    }
  }

  #root {
    height: 100%;
    width: 100%;
    }
`;
