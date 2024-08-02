import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
import '../style/FormStyle.css';

const LoginPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!phoneNumber || !password) {
      setAlertType('error');
      setAlertMessage('All fields are required!');
      setOpen(true);
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const user = users.find((user: any) => user.phoneNumber === phoneNumber && user.password === password);
  
    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUserPhoneNumber', phoneNumber); // Store phone number
      setAlertType('success');
      setAlertMessage('Login successful!');
      setOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setAlertType('error');
      setAlertMessage('Check your phone number or password!');
      setOpen(true);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '200px' }}>
      <Box className="form-container" mt={8}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          style={{ marginTop: '25px' }}
          variant="contained"
          fullWidth
          className="submit-button"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          style={{ marginTop: '10px' }}
          variant="contained"
          fullWidth
          className="submit-button"
          onClick={() => navigate('/RegisterPage')}
        >
          Go To Registration
        </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
          <Alert onClose={() => setOpen(false)} severity={alertType} sx={{ width: '100%' }}>
            {alertMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default LoginPage;
