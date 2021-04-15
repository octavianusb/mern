import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Form from './components/form/Form';
import Posts from './components/posts/Posts';
import useStyles from './styles';
import memories from './images/memories.png'

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading}  variant="h4" align="center">Memories</Typography>
        <img className={classes.image}  src={memories} alt="memories" height="60" />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.mainContainer}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
};

export default App;
