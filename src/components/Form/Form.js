import { Box, TextField, Button, Avatar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react';
import './StyledForm.css';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';

const Form = ({ title, handleClick, msg, redirect }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleLog = () => {
    handleClick(email, password);
    navigate('/');
  };

  return (
    <div className="container-form">
      <Box className="styledForm">
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <form className="styledFormSize">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </form>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLog}
        >
          {title}
        </Button>

        <Link color="inherit" href={redirect} variant="body2">
          {msg}
        </Link>
      </Box>
    </div>
  );
};

export default Form;
