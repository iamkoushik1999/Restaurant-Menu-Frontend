import { useState, useEffect } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import Loader from './CustomLoader';

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10; // Increment progress by 10%
      });
    }, 120); // Update every 200ms

    return () => clearInterval(interval);
  }, []);

  return (
    //  ---------------------- Loader ----------------------
    // <Loader />
    //   ---------------------- Progress Bar ----------------------
    //    <Box
    //    display='flex'
    //    flexDirection='column'
    //    justifyContent='center'
    //    alignItems='center'
    //    height='90vh'
    //    width='100%'>
    //    <LinearProgress sx={{ width: '50%' }} />
    //  </Box>
    //  ---------------------- Progress Bar with Number ----------------------
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='90vh'
      width='100%'>
      <Typography variant='h6' sx={{ mb: 1 }}>{`${progress}%`}</Typography>
      <LinearProgress
        variant='determinate'
        value={progress}
        sx={{ width: '50%' }}
      />
    </Box>
  );
};

export default SplashScreen;
