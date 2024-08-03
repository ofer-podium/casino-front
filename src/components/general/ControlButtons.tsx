import React from 'react';
import {  Grid } from '@mui/material';
import CashOut from './CashOut';
import NewGameButton from './NewGameButton';

const ControlButtons: React.FC = () => {
  return (
        <Grid container spacing={2} justifyContent="center" alignContent={'center'} alignItems={'center'} justifyItems={'center'} display={'flex'} >
          <Grid item xs={6}>
            <CashOut />
          </Grid>
          <Grid item xs={6}>
            <NewGameButton />
          </Grid>
        </Grid>
  );
};

export default ControlButtons;