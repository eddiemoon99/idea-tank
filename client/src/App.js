import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';

import { getIdeas } from './actions/ideas';
import lightbulb from './images/lightbulb.svg';
import Ideas from './components/Ideas/Ideas';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();

  // get ideas when dispatched or the selected id changes
  useEffect(() => {
    dispatch(getIdeas());
  }, [currentId, dispatch]);
  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appHeader} position='static'>
        <img
          className={classes.image}
          src={lightbulb}
          alt='light bulb'
          height='auto'
          width='20%'
        />
        <Typography className={classes.title} variant='h2' align='center'>
          Idea Tank
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid sx={{ marginRight: '50px !important' }} item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Ideas setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
