import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import { useGame } from '../../contexts/GameContext';
import { useTranslation } from 'react-i18next';


const GameStats: React.FC = () => {
  const { credits, spins } = useGame();
  const { t } = useTranslation();

  return (
    <Paper elevation={3} sx={{ p: 2, width: '100%', maxWidth: 300, textAlign: 'center', borderRadius: '15px',mb:2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        {t('game_stats')}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {t('credits')}
        </Typography>
        <Typography variant="body1">{credits}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {t('spins')}
        </Typography>
        <Typography variant="body1">{spins}</Typography>
      </Box>
    </Paper>
  );
};

export default GameStats;