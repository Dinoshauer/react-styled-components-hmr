import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Home from '~/pages/Home';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    background-color: antiquewhite;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Home />
    </React.Fragment>
  );
};

export default App;
