import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import themeDefault from './themes/default'
import StoreProvider from './store/StoreProvider'
import PagesRouter from './pages/PagesRouter'

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={themeDefault}>
        <PagesRouter />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;