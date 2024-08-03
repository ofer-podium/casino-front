// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Grid } from '@mui/material';
import { useAppBar } from '../../contexts/AppBarProvider';
import ChangeLanguageDropdown from './ChangeLanguage';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { title, headerColor } = useAppBar();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" maxHeight="100vh">
      <AppBar position="static" sx={{ backgroundColor: headerColor, p: 1, borderRadius: '12px' }}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Typography variant="h6" sx={{ flexGrow: 1, color: '#FFFFFF' }}>
                {title}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <ChangeLanguageDropdown />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flexGrow: 1, py: 2, display: 'flex' }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;