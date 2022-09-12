import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Memory from './Memory/Memory';
import useStyles from './styles';

const Memories = ({ setCurrentId }) => {
  const classes = useStyles();
  const memories = useSelector((state) => state.memories);

  console.log(memories);
  return !memories.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {memories.map((memory) => (
        <Grid key={memory._id} item xs={12} sm={6}>
          <Memory memory={memory} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Memories;
