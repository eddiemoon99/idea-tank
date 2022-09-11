import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import memories from './images/memories.jpeg';
import Memories from './components/Memories/Memories';
import Form from './components/Form/Form';
import useStyles from './styles';

const test = {};
const App = () => {
  const classes = useStyles();
  console.log('classes: ', classes);
  return (
    // <ThemeProvider theme={test}>
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='150'
          width='300'
        />
        <Typography className={classes.heading} variant='h2' align='center'>
          Memory House
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
            <Grid item xs={12} sm={7}>
              <Memories />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    // </ThemeProvider>
  );
};

export default App;
