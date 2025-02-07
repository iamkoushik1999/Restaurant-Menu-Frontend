import { Box, Container, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const PrivacyPolicy = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#ede7f6', minHeight: '100vh' }}>
      <Container>
        <Typography
          variant='h3'
          color='primary'
          fontWeight='bold'
          textAlign='center'>
          <LockIcon sx={{ fontSize: 40, mr: 1 }} />
          Privacy Policy
        </Typography>
        <Typography variant='h6' sx={{ mt: 3 }}>
          1. Data Collection
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          We collect data to enhance user experience. We do not sell user data.
        </Typography>
        <Typography variant='h6' sx={{ mt: 3 }}>
          2. Security
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          We take security seriously and use encryption to protect user data.
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
