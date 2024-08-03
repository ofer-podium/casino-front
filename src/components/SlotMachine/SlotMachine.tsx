import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import Slot from './Slot';
import { useGame } from '../../contexts/GameContext';

const SlotMachine: React.FC = () => {
  const { handleSpin, credits } = useGame();
  const [slots, setSlots] = useState(['C', 'L', 'O']);
  const [spinning, setSpinning] = useState([false, false, false]);

  const spinSlots = async () => {
    setSpinning([true, true, true]);
    setSlots(['X', 'X', 'X']);

    try {
      const response = await handleSpin();
      const newSlots = response.sequence
      setTimeout(() => {
        setSpinning([false, true, true]);
        setSlots([newSlots[0], 'X', 'X']);
      }, 1000);

      setTimeout(() => {
        setSpinning([false, false, true]);
        setSlots([newSlots[0], newSlots[1], 'X']);
      }, 2000);

      setTimeout(() => {
        setSpinning([false, false, false]);
        setSlots(newSlots);
      }, 3000);
    } catch (error) {
      console.error('An error occurred while spinning the slots', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {slots.map((slot, index) => (
          <Grid item key={index}>
            <Slot value={slot} spinning={spinning[index]} />
          </Grid>
        ))}
        <Grid item>
          <Button 
        disabled={credits === 0}
          variant="contained" color="primary" onClick={spinSlots} sx={{ height: '100%' }}>
            Spin
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SlotMachine;