import React from 'react';
import { useStores } from '../store';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from '../components/Form/Form';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const { userStore } = useStores();
  const navigate = useNavigate();
  const handleRegister = (email, password) => {
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

  return (
    <div>
      <Form
        title="Login"
        handleClick={handleRegister}
        msg="Don't you have an account? Signup"
        redirect={'/signup'}
      />
    </div>
  );
};

export default LoginPage;
