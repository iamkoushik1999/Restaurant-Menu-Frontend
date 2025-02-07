import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
// Icons
import QrCodeIcon from '@mui/icons-material/QrCode';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// Components
import Header from '../Common/Header';
import Footer from '../Common/Footer';

const digitalMenuImage =
  'https://images.unsplash.com/photo-1557499305-bd68d0ad468d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const saveTimeImage =
  'https://images.unsplash.com/photo-1506452819137-0422416856b8?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const mobileFriendlyImage =
  'https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#fffbf0',
      }}>
      <Header />
      <Container maxWidth='md' sx={{ textAlign: 'center', py: 5, flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}>
          <QrCodeIcon sx={{ fontSize: 80, color: 'primary.main' }} />
          <Typography variant='h3' fontWeight='bold' color='primary'>
            Welcome to QR Menu
          </Typography>
          <Typography variant='h6' color='text.secondary' maxWidth='sm'>
            Scan the QR code at any restaurant to view their digital menu
            instantly. No downloads, no hassle—just scan and explore!
          </Typography>
          <Button variant='contained' color='secondary' size='large'>
            Get Started
          </Button>
        </Box>
        <Grid container spacing={4} sx={{ mt: 5 }}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ backgroundColor: '#ffe0e0' }}>
              <CardMedia
                component='img'
                height='140'
                image={digitalMenuImage}
                alt='Digital Menu'
              />
              <CardContent>
                <RestaurantMenuIcon
                  sx={{ fontSize: 40, color: 'primary.main' }}
                />
                <Typography variant='h6' color='primary'>
                  Instant Digital Menus
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Browse restaurant menus with a simple scan.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ backgroundColor: '#e8f5e9' }}>
              <CardMedia
                component='img'
                height='140'
                image={saveTimeImage}
                alt='Save Time'
              />
              <CardContent>
                <AccessTimeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Typography variant='h6' color='primary'>
                  Save Time
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  No waiting—view menus instantly.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ backgroundColor: '#e3f2fd' }}>
              <CardMedia
                component='img'
                height='140'
                image={mobileFriendlyImage}
                alt='Mobile Friendly'
              />
              <CardContent>
                <PhoneAndroidIcon
                  sx={{ fontSize: 40, color: 'primary.main' }}
                />
                <Typography variant='h6' color='primary'>
                  Mobile Friendly
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Works seamlessly on all devices.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 5,
            textAlign: 'center',
            backgroundColor: '#fff3e0',
            p: 3,
            borderRadius: 2,
          }}>
          <Typography variant='h4' fontWeight='bold' color='secondary'>
            Why Choose QR Menu?
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <StarIcon sx={{ fontSize: 50, color: 'gold' }} />
              <Typography variant='h6' color='text.primary'>
                Highly Rated
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Our users love the simplicity and convenience.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <PeopleIcon sx={{ fontSize: 50, color: 'purple' }} />
              <Typography variant='h6' color='text.primary'>
                Millions of Users
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Join a growing community of happy diners!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ThumbUpIcon sx={{ fontSize: 50, color: 'green' }} />
              <Typography variant='h6' color='text.primary'>
                Easy & Fast
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Just scan and get started instantly.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default LandingPage;
