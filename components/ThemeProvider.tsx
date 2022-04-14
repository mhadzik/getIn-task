import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { rem } from "polished";
import theme from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --font-size-base: ${rem(17)}
  }
  * {
    font-family: "Public Sans", sans-serif;
    font-size: var(--font-size-base);
  }

  a, button {
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    background: white;
    color: black;
    border-radius: 0.25rem;
    transition: 0.2s;
    margin: -0.5em;
    padding: 0.5em;

    :hover {
      background: ${({ theme }) => theme.colors.primary};
      transition: 0.2s;
      color: white;
    }
    

    
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    line-height: 1.2;
    margin-top: 0.6em;
    margin-bottom: 1.4em;
  }

  h3, h4, h5 {
    line-height: 1.6;
  }

  p {
    line-height: 1.6;
    margin-top: 0;
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  @media ${theme.devices.tablet} {
    :root {
      --font-size-base: ${rem(19)};
    }
  }
`;

export default function ThemeProvider({ children }: any) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
}
