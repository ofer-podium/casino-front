import React from 'react';
import { Button, Box } from '@mui/material';
import { useGame } from '../../contexts/GameContext';
import { useAlert } from '../../contexts/AlertContext';
import { useTranslation } from 'react-i18next';
import { COLOR_PALLETE } from '../../themes';
import { AlertSeverity } from '../../constants/general';

const NewGameButton: React.FC = () => {
  const { t } = useTranslation();
  const { handleNewSession, isGameRunning, setAreButtonsDisabled, credits,spins } = useGame();
  const { showAlert } = useAlert();

  const startNewGame = () => {
    handleNewSession();
    setAreButtonsDisabled(false);
    showAlert('new_game', AlertSeverity.SUCCESS);
  };


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
      <Button
        disabled={(isGameRunning && credits !== 0) || spins === 0}
        variant="contained"
        color="secondary"
        onClick={startNewGame}
        sx={{ backgroundColor: COLOR_PALLETE.gold, color: '#000', '&:hover': { backgroundColor: COLOR_PALLETE.darkGold } }}
      >
        {t('new_game')}
      </Button>
    </Box>
  );
};

export default NewGameButton;