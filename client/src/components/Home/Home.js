import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getIdeas } from '../../actions/ideas';

import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  // get ideas when dispatched or the selected id changes
  useEffect(() => {
    dispatch(getIdeas());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          marginBottom={3}
        >
          <Grid item xs={12} sm={4.5}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
        <Ideas setCurrentId={setCurrentId} />
      </Container>
    </Grow>
  );
};

export default Home;
