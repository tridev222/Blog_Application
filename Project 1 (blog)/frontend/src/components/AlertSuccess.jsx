import * as React from 'react';
import { Alert, IconButton, Box, Button, CircularProgress, LinearProgress, Stack, Typography } from '@mui/material'; // MUI components
import { Check } from '@mui/icons-material'; 

export default function AlertSuccess() {
  const [progress, setProgress] = React.useState(0); // State to track progress

  React.useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => Math.min(prevProgress + 1, 100)); 
      }, 100); 
      return () => clearInterval(timer);
    }
  }, [progress]);

  return (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <Alert
        severity="success"
        variant="filled"
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        icon={
          <Check fontSize="large" sx={{ color: 'white' }} />
        }
        action={
          <IconButton
            color="inherit"
            size="small"
            onClick={() => console.log('Close clicked')}
          >
          </IconButton>
        }
      >
        <Box>
          <Typography variant="h6">Success!!!</Typography>
          <Typography variant="body2">
            Post The Blog Successfully
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress} 
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 0,
            height: 5,
          }}
        />
      </Alert>
    </Stack>
  );
}
