import { Button } from '@mui/material';
import React from 'react';
import { useStores } from '../../store';
import { useNavigate } from 'react-router-dom';
const LogOutBtn = () => {
  const { userStore } = useStores();
  const navigate = useNavigate();
  const handleLogout = () => {
    userStore.removeUser();
    navigate('/signup');
  };

  return <Button onClick={handleLogout}>LogOut</Button>;
};

export default LogOutBtn;
