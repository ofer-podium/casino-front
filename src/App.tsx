import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider,CssBaseline } from '@mui/material';
import { casinoTheme} from './themes';
import { AppBarProvider } from './contexts/AppBarProvider';
import MainPage from './pages/Main'
import { GameProvider } from './contexts/GameContext';
import { AlertProvider } from './contexts/AlertContext';
import './i18n';


const theme = createTheme(casinoTheme);
const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <GameProvider>
          <AppBarProvider> {/* Mainly For Future use => will allow easy navigation between pages */}
          <AlertProvider> 
          <Router>
            <Routes>
              <Route path="/casino-front" element={<MainPage />}/>
              <Route path="*" element={<div>404</div>} />
            </Routes>
          </Router>
          </AlertProvider>
          </AppBarProvider>
          </GameProvider>
      </ThemeProvider>
  );
};

export default App;