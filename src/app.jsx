import React from 'react';
import { GlobalStyleComponent } from './style/styled/globalStyle';
import { Main } from './pages/main/main';

export const App = () => {
  return (
    <>
      <GlobalStyleComponent />
      <Main />
    </>
  );
};
