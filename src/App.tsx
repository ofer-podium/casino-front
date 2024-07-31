import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { defaultTheme } from './themes';
import { AppBarProvider } from './contexts/AppBarProvider';
import MainPage from './pages/Main'

const theme = createTheme(defaultTheme);
const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <AppBarProvider>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />}/>
              {/* <Route path="/main" element={<PrivateRoute element={<CameraDisplayPage />} />} /> */}
            </Routes>
          </Router>
          </AppBarProvider>
      </ThemeProvider>
  );
};

export default App;