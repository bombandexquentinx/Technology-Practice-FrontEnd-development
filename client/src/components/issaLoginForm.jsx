import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InputAdornment from '@mui/material/InputAdornment';
import { login } from '../services/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(false);

    try {
      await login(email, password);
      setMessage('Login successful!');
      setError(false);
    } catch (err) {
      setMessage('Invalid email or password.');
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
        p: 2,
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: { xs: '90%', sm: 420 },
          p: 5,
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Box
              component="h2"
              sx={{
                fontSize: '1.8rem',
                fontWeight: 600,
                color: '#009688',
                letterSpacing: '0.5px',
              }}
            >
              Issa Login
            </Box>
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="Username"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              variant="outlined"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: '#009688' }} />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { fontSize: '1rem', width: '100%' },
              }}
              sx={{ fontFamily: 'Roboto, sans-serif' }}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              variant="outlined"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VisibilityOffIcon sx={{ color: '#009688' }} />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { fontSize: '1rem', width: '100%' },
              }}
              sx={{ fontFamily: 'Roboto, sans-serif' }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            fullWidth
            sx={{
              backgroundColor: '#009688',
              '&:hover': {
                backgroundColor: '#00796B',
              },
              textTransform: 'none',
              fontWeight: 600,
              py: 1.5,
              fontSize: '1rem',
              borderRadius: 2,
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
          {message && (
            <Box
              sx={{
                mt: 3,
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: error ? 'error.main' : 'success.main',
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              {error ? <ErrorIcon sx={{ mr: 1 }} /> : <CheckCircleIcon sx={{ mr: 1 }} />}
              {message}
            </Box>
          )}
        </form>
      </Paper>
    </Box>
  );
}
