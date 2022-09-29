import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Avatar, AppBar, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import useStyles from './styles';
import lightbulb from '../../images/lightbulb.svg';

const Nav = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const token = user?.token;

    // handle logout timeout
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/auth');
    setUser(null);
  };
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
              alt={user?.result?.given_name || user?.result?.firstName}
              src={user.result.picture}
            >
              {user?.result?.given_name
                ? user?.result?.given_name.charAt(0)
                : user?.result?.firstName.charAt(0)}
            </Avatar>
            <Button
              onClick={handleLogout}
              sx={{ height: 25, backgroundColor: '#25131F' }}
              variant='contained'
            >
              Log out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to='/auth'
            variant='contained'
            sx={{
              backgroundColor: '#854F71',
            }}
          >
            Sign In
          </Button>
        )}
      </div>
    </AppBar>
  );
};

export default Nav;
