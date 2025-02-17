import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  InputAdornment,
  Card,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log('Login attempt:', credentials);
    // Add authentication logic here
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#fffbf0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Card
        sx={{
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: '#fff3e0',
          width: '100%',
          maxWidth: 400,
        }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          color='secondary'
          textAlign='center'>
          Restaurant Owner Login
        </Typography>

        {/* Email Input */}
        <TextField
          fullWidth
          label='Email'
          name='email'
          type='email'
          variant='outlined'
          margin='normal'
          value={credentials.email}
          onChange={handleChange}
        />

        {/* Password Input with Eye Button */}
        <TextField
          fullWidth
          label='Password'
          name='password'
          type={showPassword ? 'text' : 'password'}
          variant='outlined'
          margin='normal'
          value={credentials.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge='end'>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Login Button */}
        <Button
          fullWidth
          variant='contained'
          color='primary'
          sx={{ mt: 2, bgcolor: '#ff7043', '&:hover': { bgcolor: '#e64a19' } }}
          onClick={handleLogin}>
          Login
        </Button>

        {/* Contact Admin Link */}
        <Typography
          sx={{ mt: 2, cursor: 'pointer', color: 'blue', textAlign: 'center' }}
          onClick={() => navigate('/contact-admin')}>
          Contact Admin
        </Typography>
      </Card>
    </Box>
  );
};

export default LoginForm;
