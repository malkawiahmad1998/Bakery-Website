import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import '../style/LoginPage.css'; // Import the shared styles

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Handle login logic here
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <TextField
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <TextField
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <Button type="submit" className="submit-button">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
