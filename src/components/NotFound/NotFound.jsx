import { Box, Container, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 10,
        backgroundColor: '#ffebee',
        minHeight: '100vh',
      }}>
      <Container>
        <ErrorOutlineIcon sx={{ fontSize: 100, color: 'red' }} />
        <Typography variant='h2' color='primary' fontWeight='bold'>
          404 Not Found
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          Oops! The page you are looking for does not exist.
        </Typography>
        <Button
          variant='contained'
          color='primary'
          sx={{ mt: 3 }}
          onClick={() => navigate('/')}>
          Go Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound;
