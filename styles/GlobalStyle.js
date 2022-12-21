import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    /* background: ${({ theme }) => theme.colors.light1}; */
    /* background-image: linear-gradient(to right bottom, #05224d, #0b2e62, #113a78, #18468e, #1e53a5, #2a5eb1, #3569bd, #3f74c9, #507fcc, #608ace, #6f95d0, #7fa0d2); */
    /* background-image: linear-gradient( to bottom left, hsl(240, 100%, 90%) 0%,hsl(240, 100%, 80%), 28%,hsl(240, 100%, 80%) 38%, hsl(240, 100%, 90%) 68%, hsl(240, 100%, 85%) 100%); */
    background-image: linear-gradient( to bottom left, hsl(216, 64%, 77%) 0%,hsl(216, 64%, 87%), 28%,hsl(240, 100%, 90%) 38%, hsl(216, 64%, 77%)68%, hsl(216, 64%, 87%) 100%);
  }

  a {
        text-decoration: none;
        text-align: center;
        color: inherit;
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.accent};
    }

    ul, li {
        list-style-type: none;
    }

    .layout {
      margin-top: 4rem;
    }

    .line {
    height: 3px;
    background-color: ${props => props.theme.colors.main2};
    margin-bottom: 3rem;
  }
`;

export default GlobalStyle;
