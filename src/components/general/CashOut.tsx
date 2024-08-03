import React from 'react';
import { Button, Box } from '@mui/material';
import { useGame } from '../../contexts/GameContext';

const CashOut: React.FC = () => {
  const { credits,areButtonsDisabled,spins,handleCashOut } = useGame();


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleCashOut}
        disabled={credits === 0 || spins ===0 || areButtonsDisabled}
        sx={{
          backgroundColor: '#FFD700',
          color: '#000',
          '&:hover': {
            backgroundColor: '#E6C200',
          },
        }}
      >
        Cash Out
      </Button>
    </Box>
  );
};

export default CashOut;