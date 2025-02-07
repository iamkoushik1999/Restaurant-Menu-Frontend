import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        textAlign: 'center',
        mt: 'auto',
        backgroundColor: '#f5f5f5',
      }}>
      <Typography variant='body2' color='textSecondary'>
        © 2025 QR Menu. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
