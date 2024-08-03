import React from 'react';
import { Button, Box } from '@mui/material';
import { useGame } from '../../contexts/GameContext';
import { useAlert } from '../../contexts/AlertContext';

const CashOut: React.FC = () => {
  const { showAlert } = useAlert();
  const { credits,areButtonsDisabled,spins,handleCashOut } = useGame();

  const cashOut = async () => {
    const response = await handleCashOut();
    showAlert('You received ' + response + ' credits!', 'success');
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      <Button
        variant="contained"
        color="secondary"
        onClick={cashOut}
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