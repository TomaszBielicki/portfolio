import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface SliderDotsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export const SliderDots = ({ total, current, onSelect }: SliderDotsProps) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
    {Array.from({ length: total }).map((_, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onSelect(index)}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: current === index ? 'primary.main' : 'background.paper',
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
              backgroundColor: 'primary.main',
            },
          }}
        />
      </motion.div>
    ))}
  </Box>
);