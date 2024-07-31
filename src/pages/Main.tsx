import React from 'react';
import Layout from '../components/general/Layout';
import { Typography, Box } from '@mui/material';

const MainPage: React.FC = () => {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
        <Typography variant="h4" gutterBottom>
          Welcome to the Casino Slot Machine!
        </Typography>
        <Typography variant="body1">
          Pull the lever to start the game and try your luck.
        </Typography>
      </Box>
    </Layout>
  );
};

export default MainPage;