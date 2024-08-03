// src/components/general/NewGameButton.tsx
import React from 'react';
import { Button, Box } from '@mui/material';
import { useGame } from '../../contexts/GameContext';
import { useAlert } from '../../contexts/AlertContext';

const NewGameButton: React.FC = () => {
  const { handleNewSession, isGameRunning, spins,setAreButtonsDisabled } = useGame();
  const { showAlert } = useAlert();

  const startNewGame = () => {
    handleNewSession();
    setAreButtonsDisabled(false);
    showAlert('A new game has started!', 'success');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
      <Button
        disabled={isGameRunning || spins === 0}
        variant="contained"
        color="secondary"
        onClick={startNewGame}
        sx={{ backgroundColor: '#FFD700', color: '#000', '&:hover': { backgroundColor: '#E6C200' } }}
      >
        New Game
      </Button>
    </Box>
  );
};

export default NewGameButton;