// src/components/NewGameButton.tsx
import React from 'react';
import { Button, Box } from '@mui/material';
import { useGame } from '../../contexts/GameContext';
import { useAlert } from '../../contexts/AlertContext';

const NewGameButton: React.FC = () => {
  const { handleNewSession,areButtonsDisabled,spins } = useGame();
  const { showAlert } = useAlert();

  const startNewGame = () => {
    handleNewSession();
    showAlert('A new game has started!', 'success');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 2 }}>
      <Button
      disabled={areButtonsDisabled || spins === 0}
      variant="contained" color="primary" onClick={startNewGame}>
        New Game
      </Button>
    </Box>
  );
};

export default NewGameButton;