import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import Idea from './Idea/Idea';
import useStyles from './styles';

const Ideas = ({ setCurrentId }) => {
  // get ideas
  const ideas = useSelector((state) => state.ideas);
  const classes = useStyles();

  return !ideas.length ? (
    <Typography variant='h4' className={classes.empty} color='white'>
      No ideas in the tank yet...
    </Typography>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {ideas.map((idea) => (
        <Grid key={idea._id} item xs={12} sm={6} md={3}>
          <Idea idea={idea} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Ideas;
