import React from 'react';
import AppRouter from './AppRouter';
import { Reset } from 'styled-reset';

function App() {
  return (
    <React.Fragment>
      <Reset />
      <AppRouter />
    </React.Fragment>
  );
}

export default App;
