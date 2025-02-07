import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
} from '@mui/material';
// Icons
import PeopleIcon from '@mui/icons-material/People';
import VerifiedIcon from '@mui/icons-material/Verified';

const AboutUs = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#e8f5e9', minHeight: '100vh' }}>
      <Container>
        <Typography
          variant='h3'
          color='primary'
          fontWeight='bold'
          textAlign='center'>
          <PeopleIcon sx={{ fontSize: 40, mr: 1 }} />
          About Us
        </Typography>
        <Typography
          variant='h6'
          color='text.secondary'
          textAlign='center'
          sx={{ mt: 2 }}>
          Our mission is to revolutionize the dining experience with QR-based
          digital menus.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ backgroundColor: '#fff' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{ width: 80, height: 80, mx: 'auto' }}
                  src='https://source.unsplash.com/100x100/?person'
                />
                <Typography variant='h6' sx={{ mt: 2 }}>
                  John Doe
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Founder & CEO
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ backgroundColor: '#fff' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{ width: 80, height: 80, mx: 'auto' }}
                  src='https://source.unsplash.com/100x100/?woman'
                />
                <Typography variant='h6' sx={{ mt: 2 }}>
                  Jane Smith
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  CTO
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
