import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import '../style/FormStyle.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const navigateToLogin = () => {
    setTimeout(() => {
      navigate('/LoginPage');
    }, 2500);
  };

  const handleRegister = () => {
    if (!phoneNumber || !password || !confirmPassword || !name) {
      setAlertType('error');
      setAlertMessage('All fields are required!');
      setOpen(true);
      return;
    }

    if (password !== confirmPassword) {
      setAlertType('error');
      setAlertMessage('Passwords do not match!');
      setOpen(true);
      return;
    }

    // Retrieve existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    // Check if the phone number already exists
    const userExists = existingUsers.some((user: any) => user.phoneNumber === phoneNumber);

    if (userExists) {
      setAlertType('error');
      setAlertMessage('Phone number is already registered!');
      setOpen(true);
      return;
    }

    // Add new user to the array
    const newUser = { name, phoneNumber, password };
    existingUsers.push(newUser);

    // Save updated user data to local storage
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

    setAlertType('success');
    setAlertMessage('Registration successful!');
    setOpen(true);
    navigateToLogin();
  };

  return (
    <Container maxWidth="sm" style={{marginTop:'150px'}}>
      <Box className="form-container" mt={8}>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          style={{marginTop:'25px'}}
          variant="contained"
          fullWidth
          className="submit-button"
          onClick={handleRegister}
        >
          Register
        </Button>
        <Button
          style={{marginTop:'10px'}}
          variant="contained"
          fullWidth
          className="submit-button"
          onClick={() => navigate('/LoginPage')}
        >
          Go To LOGIN
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

export default RegisterPage;
