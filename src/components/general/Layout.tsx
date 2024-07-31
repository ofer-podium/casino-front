import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Box, Container, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useAppBar } from '../../contexts/AppBarProvider';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { title, backNavigation,headerColor } = useAppBar();
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (backNavigation) {
      navigate(backNavigation);
    }
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" maxHeight="100vh" >
      <AppBar position="static" sx={{backgroundColor:headerColor}}>
        <Toolbar>
          {backNavigation && (
            <IconButton edge="start" color="inherit" onClick={handleBackClick} sx={{ mr: 2 }}>
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flexGrow: 1, py: 2 }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;