import React, { useState } from 'react';
import Form from '../Form/Form.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useStores } from '../../store';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const LoginBtn = () => {
  const navigate = useNavigate();
  const { userStore } = useStores();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      userStore.setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      });
      navigate('/');
    });
  };

  const handleOpen = () => {
    setIsOpen();
    navigate('/login');
  };

  return (
    <>
      <div>
        <Button onClick={handleOpen}>LogIn</Button>
      </div>
      {isOpen && (
        <div className="styledContainerForm">
          <Form title="Log In" handleClick={handleLogin} />
        </div>
      )}
    </>
  );
};

export default LoginBtn;
