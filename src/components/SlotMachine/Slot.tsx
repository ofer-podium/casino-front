// src/components/Slot.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { COLOR_PALLETE } from '../../themes';

interface SlotProps {
  value: string;
  spinning: boolean;
}

const Slot: React.FC<SlotProps> = ({ value, spinning }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #FFD700', borderRadius: '12px', width: '100px', height: '100px', backgroundColor: COLOR_PALLETE.erieBlack }}>
      <Typography variant="h4" sx={{ color: COLOR_PALLETE.white, animation: spinning ? 'spin 1s linear infinite' : 'none' }}>
        {spinning ? 'X' : value}
      </Typography>
    </Box>
  );
};

export default Slot;