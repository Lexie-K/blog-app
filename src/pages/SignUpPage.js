import React from 'react';
import Form from '../components/Form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useStores } from '../store';
import { observer } from 'mobx-react-lite';

const SignUpPage = observer(() => {
  const navigate = useNavigate();
  const { userStore } = useStores();
  const handleRegister = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      userStore.setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      });
      navigate('/login');
    });
  };

  return (
    <div>
      <Form
        title="Sign Up"
        handleClick={handleRegister}
        msg="Already have an account? Login"
        redirect={'/login'}
      />
    </div>
  );
});

export default SignUpPage;
