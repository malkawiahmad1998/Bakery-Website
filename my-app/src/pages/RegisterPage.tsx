import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Handle register logic here
    navigate('/login'); // Redirect to login page after successful registration
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" align="center">Register</Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Full Name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
            onClick={handleRegister}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
