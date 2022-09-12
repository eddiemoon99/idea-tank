import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import Idea from './Idea/Idea';
import useStyles from './styles';

const Ideas = ({ setCurrentId }) => {
  const classes = useStyles();

  // get ideas
  const ideas = useSelector((state) => state.ideas);

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
        <Grid key={idea._id} item xs={12} sm={6}>
          <Idea idea={idea} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Ideas;
