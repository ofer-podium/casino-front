import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import Slot from './Slot';
import { useGame } from '../../contexts/GameContext';

const SlotMachine: React.FC = () => {
  const { handleSpin } = useGame();
  const [slots, setSlots] = useState(['C', 'L', 'O']);
  const [spinning, setSpinning] = useState([false, false, false]);

  const spinSlots = async () => {
    setSpinning([true, true, true]);
     const response= await handleSpin();
     console.log(response,'responseresponseresponse');
     

    setTimeout(() => {
      setSpinning([false, true, true]);
      setSlots([getRandomSymbol(), slots[1], slots[2]]);
    }, 1000);

    setTimeout(() => {
      setSpinning([false, false, true]);
      setSlots([slots[0], getRandomSymbol(), slots[2]]);
    }, 2000);

    setTimeout(() => {
      setSpinning([false, false, false]);
      setSlots([slots[0], slots[1], getRandomSymbol()]);
    }, 3000);
  };

  const getRandomSymbol = () => {
    const symbols = ['C', 'L', 'O', 'W'];
    return symbols[Math.floor(Math.random() * symbols.length)];
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
          <Button variant="contained" color="primary" onClick={spinSlots} sx={{ height: '100%' }}>
            Spin
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SlotMachine;