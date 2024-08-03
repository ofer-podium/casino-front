// src/components/SlotMachine.tsx
import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import Slot from './Slot';
import { useGame } from '../../contexts/GameContext';
import { useTranslation } from 'react-i18next';
import Confetti from 'react-confetti';


const SlotMachine: React.FC = () => {
  const { handleSpin, credits, areButtonsDisabled, setAreButtonsDisabled,setCredits,setIsGameRunning } = useGame();
  const [slots, setSlots] = useState(['C', 'L', 'O']);
  const [spinning, setSpinning] = useState([false, false, false]);
  const [celebration, setCelebration] = useState(false);
  const { t } = useTranslation();

  const spinSlots = async () => {
    setSpinning([true, true, true]);
    setSlots(['X', 'X', 'X']);
    setAreButtonsDisabled(true);
    setCelebration(false);

    try {
      const response = await handleSpin();
      
      const newSlots = response.sequence;
      const isWinningSequence = response.isWinningSequence;

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
        if (isWinningSequence) {
          setCelebration(true);
        }
        setCredits(response.currentCredits);
        setAreButtonsDisabled(false);
        if(credits === 0){
         setIsGameRunning(false);
        }
      }, 3000);

      setTimeout(() => {
        setCelebration(false);
      }, 15000);
    } catch (error) {
      console.error('An error occurred while spinning the slots', error);
      setAreButtonsDisabled(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      {celebration && <Confetti /> }
      <Grid container spacing={2} justifyContent="center">
        {slots.map((slot, index) => (
          <Grid item key={index}>
            <Slot value={slot} spinning={spinning[index]} />
          </Grid>
        ))}
        <Grid item>
          <Button 
            disabled={credits === 0 || areButtonsDisabled}
            variant="contained" color="primary" onClick={spinSlots} sx={{ height: '100%' }}>
            {t('spin')}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SlotMachine;