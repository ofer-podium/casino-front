import React from 'react';
import { Button, Box } from '@mui/material';
import { useGame } from '../../contexts/GameContext';
import { useAlert } from '../../contexts/AlertContext';
import { useTranslation } from 'react-i18next';

const NewGameButton: React.FC = () => {
  const { t } = useTranslation();
  const { handleNewSession, isGameRunning, setAreButtonsDisabled, credits } = useGame();
  const { showAlert } = useAlert();

  const startNewGame = () => {
    handleNewSession();
    setAreButtonsDisabled(false);
    showAlert('new_game', 'success');
  };


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
      <Button
        disabled={(isGameRunning) && (credits !== 0)}
        variant="contained"
        color="secondary"
        onClick={startNewGame}
        sx={{ backgroundColor: '#FFD700', color: '#000', '&:hover': { backgroundColor: '#E6C200' } }}
      >
        {t('new_game')}
      </Button>
    </Box>
  );
};

export default NewGameButton;