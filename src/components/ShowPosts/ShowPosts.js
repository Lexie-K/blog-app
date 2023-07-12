import React from 'react';
import {
  Card,
  Grid,
  CardContent,
  CardActionArea,
  Typography,
} from '@mui/material';
import { useStores } from '../../store';
import { useNavigate } from 'react-router-dom';

const ShowPosts = () => {
  const navigate = useNavigate();
  const { blogStore } = useStores();
  const handleOpen = id => {
    navigate(`/details/${id}`);
  };
  return (
    <>
      <Grid
        container
        alignItems="stretch"
        rowSpacing={4}
        columnSpacing={2}
        justify="center"
        sx={{
          display: 'flex',
          m: '5px',
        }}
      >
        {blogStore.posts?.map(post => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={post.id}>
            <Card
              sx={{
                minWidth: '100%',
                height: '100%',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '0%',
                background: 'rgba(229, 229, 229, 1)',
                justifyContent: 'start',
                alignItems: 'start',
              }}
            >
              <CardActionArea>
                <div onClick={() => handleOpen(post.id)}>
                  <CardContent>
                    <Typography>{post.title}</Typography>
                    {/* delete post.content */}
                    <Typography
                      sx={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        width: '200px',
                      }}
                    >
                      {post.content}
                    </Typography>
                  </CardContent>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ShowPosts;
