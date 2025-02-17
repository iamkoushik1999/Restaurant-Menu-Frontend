import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  InputAdornment,
  Card,
  CircularProgress,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/features/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    dispatch(loginUser(credentials)).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/dashboard'); // Redirect after successful login
      }
    });
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

      {/* Error Message */}
        {error && (
          <Typography color='error' sx={{ mt: 1, textAlign: 'center' }}>
            {error}
          </Typography>
        )}

        {/* Login Button */}
        <Button
          fullWidth
          variant='contained'
          color='primary'
          sx={{ mt: 2, bgcolor: '#ff7043', '&:hover': { bgcolor: '#e64a19' } }}
          onClick={handleLogin}
          disabled={loading}>
          {loading ? <CircularProgress size={24} color='inherit' /> : 'Login'}
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
