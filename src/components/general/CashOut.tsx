import React from 'react';
import { Button, Box } from '@mui/material';
import { useGame } from '../../contexts/GameContext';
import { useAlert } from '../../contexts/AlertContext';
import { useTranslation } from 'react-i18next';
import { COLOR_PALLETE } from '../../themes';
import { AlertSeverity } from '../../constants/general';

const CashOut: React.FC = () => {
  const { t } = useTranslation();
  const { showAlert } = useAlert();
  const { credits,areButtonsDisabled,spins,handleCashOut } = useGame();

  const cashOut = async () => {
    const response = await handleCashOut();
    showAlert('$$ ' + response + ' $$', AlertSeverity.SUCCESS);
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      <Button
        variant="contained"
        color="secondary"
        onClick={cashOut}
        disabled={credits === 0 || spins ===0 || areButtonsDisabled}
        sx={{
          backgroundColor: COLOR_PALLETE.gold,
          color: '#000',
          '&:hover': {
            backgroundColor: COLOR_PALLETE.darkGold,
          },
        }}
      >
        {t('cash_out')}
      </Button>
    </Box>
  );
};

export default CashOut;