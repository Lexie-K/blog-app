import React from 'react';
import ShowPosts from '../components/ShowPosts/ShowPosts';
import LoginBtn from '../components/LoginBtn/LoginBtn';
import LogOutBtn from '../components/LogOutBtn/LogOutBtn';
import { observer } from 'mobx-react-lite';
import { useStores } from '../store';

import CreatePost from '../components/CreatePost/CreatePost';
import { useAuth } from '../hooks/useAuth';
import { Button, Box } from '@mui/material';

const MainPage = observer(() => {
  const { modalStore } = useStores();
  const { isAuth } = useAuth();

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          sx={{ m: '10px' }}
          onClick={() => {
            modalStore.openModal();
          }}
        >
          Create Post
        </Button>
        {isAuth ? <LogOutBtn /> : <LoginBtn />}
      </Box>
      {modalStore.show && <CreatePost />}
      <ShowPosts />
    </>
  );
});

export default MainPage;
