import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactUs = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#e3f2fd', minHeight: '100vh' }}>
      <Container>
        <Typography
          variant='h3'
          color='primary'
          fontWeight='bold'
          textAlign='center'>
          Contact Us
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Typography variant='h6'>
              <EmailIcon sx={{ mr: 1, color: 'blue' }} /> Email:
              support@qrmenu.com
            </Typography>
            <Typography variant='h6'>
              <PhoneIcon sx={{ mr: 1, color: 'green' }} /> Phone: +1 234 567 890
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Your Name' sx={{ mb: 2 }} />
            <TextField fullWidth label='Your Email' sx={{ mb: 2 }} />
            <TextField
              fullWidth
              multiline
              rows={4}
              label='Your Message'
              sx={{ mb: 2 }}
            />
            <Button variant='contained' color='primary'>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
