import { Box } from '@mui/material';
import { DotLoader } from 'react-spinners';

const Loader = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='90vh'>
      <DotLoader
        color='#000'
        margin={2}
        radius={20}
        speedMultiplier={1}
        aria-label='loading'
        data-testid='loader'
        size={100}
      />
    </Box>
  );
};

export default Loader;
