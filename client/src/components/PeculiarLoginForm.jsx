import React, { useState } from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from '@mui/material';

const PeculiarLoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    setTimeout(() => {
      setLoading(false);
      setMessage(`Welcome, ${formData.email.split('@')[0]}!`);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 py-12">
      <Card className="w-full max-w-sm shadow-xl rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <div className="text-center">
            <Typography variant="h5" className="font-bold text-gray-800 mb-1">
              Welcome Back to Peculiar LoginForm👋
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Sign in to continue
            </Typography>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              label="Email Address"
              name="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              size="medium"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide rounded-md"
            >
              {loading ? <CircularProgress size={20} color="inherit" /> : 'Sign In'}
            </Button>
          </form>

          {message && (
            <Typography className="text-green-600 text-center font-medium pt-2">
              {message}
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PeculiarLoginForm;