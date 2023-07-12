import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStores } from '../store';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Box, Button, TextField, Typography } from '@mui/material';

const DetailsPage = observer(({ post }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const params = useParams();
  const { blogStore } = useStores();
  const clone = toJS(blogStore.posts);
  const current = clone.find(post => post.id === params.id);

  const handleEdit = () => {
    const clone = toJS(blogStore.posts);
    const current = clone.find(post => post.id === params.id);
    setTitle(current.title);
    setContent(current.content);
    blogStore.toggleEditing();
  };

  const handleSave = () => {
    blogStore.editPost({ id: params.id, title, content });
    blogStore.toggleEditing();
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          minWidth: '320px',
          m: '15px',
        }}
      >
        {blogStore.isEditing ? (
          <TextField
            minWidth="320px"
            multiline
            rows={1}
            required
            style={{ width: '100%' }}
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
          />
        ) : (
          <Typography variant="h3">{current?.title}</Typography>
        )}
        {blogStore.isEditing ? (
          <TextField
            minWidth="320px"
            multiline
            rows={8}
            required
            style={{ width: '100%' }}
            value={content}
            onChange={e => setContent(e.target.value)}
            type="text"
          />
        ) : (
          <Typography>{current?.content}</Typography>
        )}
        {blogStore.isEditing ? (
          <Button onClick={() => handleSave()}>Save Post</Button>
        ) : (
          <Button onClick={() => handleEdit()}>Edit Post</Button>
        )}
      </Box>
    </>
  );
});

export default DetailsPage;
