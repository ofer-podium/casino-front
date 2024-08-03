import React from 'react';
import { Box, Typography } from '@mui/material';

type StatDisplayProps = {
  label: string;
  value: number;
};

const StatDisplay: React.FC<StatDisplayProps> = ({ label, value }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
};

export default StatDisplay;