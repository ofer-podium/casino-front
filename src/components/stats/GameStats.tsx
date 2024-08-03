import React from 'react';
import {  Typography, Paper, Divider } from '@mui/material';
import { useGame } from '../../contexts/GameContext';
import { useTranslation } from 'react-i18next';
import StatDisplay from './StatDisplay';

const GameStats: React.FC = () => {
  const { credits, spins } = useGame();
  const { t } = useTranslation();

  return (
    <Paper elevation={3} sx={{ p: 2, width: '100%', maxWidth: 300, textAlign: 'center', borderRadius: '15px', mb: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        {t('game_stats')}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <StatDisplay label={t('credits')} value={credits} />
      <StatDisplay label={t('spins')} value={spins} />
    </Paper>
  );
};

export default GameStats;