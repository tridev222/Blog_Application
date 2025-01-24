import React from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddImageIcon = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50px', 
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'green',  
        color: 'white', 
        cursor: 'pointer',
      }}
    >
      <IconButton sx={{ color: 'white' }}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default AddImageIcon;