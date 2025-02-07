import { Box, Container, Typography } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';

const Terms = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#fbe9e7', minHeight: '100vh' }}>
      <Container>
        <Typography
          variant='h3'
          color='primary'
          fontWeight='bold'
          textAlign='center'>
          <GavelIcon sx={{ fontSize: 40, mr: 1 }} />
          Terms & Conditions
        </Typography>
        <Typography variant='h6' sx={{ mt: 3 }}>
          1. Introduction
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          Welcome to QR Menu! By using our service, you agree to these terms.
        </Typography>
        <Typography variant='h6' sx={{ mt: 3 }}>
          2. User Responsibilities
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          Users must not misuse the platform or attempt unauthorized access.
        </Typography>
      </Container>
    </Box>
  );
};

export default Terms;
