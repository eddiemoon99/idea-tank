import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AppBar, Typography, Button } from '@mui/material';

import useStyles from './styles';
import lightbulb from '../../images/lightbulb.svg';

const Nav = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    const token = user?.token;

    // JWT

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);
  const classes = useStyles();
  return (
    <AppBar className={classes.appHeader} position='static'>
      <Link to='/' style={{ marginRight: -120 }}>
        <img src={lightbulb} alt='light bulb' height='auto' width='50%' />
      </Link>
      <Typography
        component={Link}
        to='/'
        className={classes.title}
        variant='h2'
      >
        Idea Tank
      </Typography>
      <div style={{ position: 'absolute', top: '5%', right: '1%' }}>
        {user ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              width: 150,
              height: 25,
            }}
          >
            <Avatar
              sx={{ height: 25, width: 25 }}
              alt={user.result.given_name}
              src={user.result.picture}
            >
              {user.result.given_name.charAt(0)}
            </Avatar>
            <Button sx={{ height: 25 }} variant='contained' color='secondary'>
              Log out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to='/auth'
            variant='contained'
            color='primary'
          >
            Sign In
          </Button>
        )}
      </div>
    </AppBar>
  );
};

export default Nav;
