import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Modal, Typography } from '@mui/material';
import { useStores } from '../../store';
const style = {
  position: 'absolute',
  padding: '10px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '100%',
  maxHeight: '100%',
  bgcolor: 'background.paper',
  boxShadow: 100,
  borderRadius: ' 0.5rem',
  overflow: 'auto',
  '@media(max-width:768px)': {
    minWidth: '100%',
    minHeight: '100%',
  },
};

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { modalStore, blogStore } = useStores();

  const handlePost = () => {
    if (title && content) {
      blogStore.addPost(title, content);
      modalStore.closeModal();
    }
  };

  return (
    <form>
      <Modal
        open={modalStore.show}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                component="h1"
                variant="h5"
                sx={{ textAlign: 'center' }}
              >
                Create New Post
              </Typography>
              <TextField
                onChange={e => setTitle(e.target.value)}
                value={title}
                style={{ width: '100%' }}
                id="title-text"
                label="Title"
                placeholder="Write your Title"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => setContent(e.target.value)}
                value={content}
                style={{ width: '100%' }}
                id="content-text"
                label="Content"
                placeholder="Write your Content"
                multiline
                rows={6}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={handlePost}
                variant="contained"
                style={{ width: '100%' }}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </form>
  );
};

export default CreatePost;
