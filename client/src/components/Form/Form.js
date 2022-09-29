import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  TextField,
  Button,
  ButtonGroup,
  Typography,
  Paper,
} from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import EjectIcon from '@mui/icons-material/Eject';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import useStyles from './styles';
import { createIdea, updateIdea } from '../../actions/ideas';

const Form = ({ currentId, setCurrentId }) => {
  const [ideaData, setIdeaData] = useState({
    title: '',
    description: '',
    tags: '',
    selectedFile: '',
  });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [show, setShow] = useState(false);

  // get current selected idea if there is one
  const idea = useSelector((state) =>
    currentId ? state.ideas.find((m) => m._id === currentId) : null
  );

  const location = useLocation();
  const classes = useStyles();
  const dispatch = useDispatch();

  // set form with current idea if exists
  useEffect(() => {
    if (idea) setIdeaData(idea);
  }, [idea]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    let name;
    if (user?.result?.firstName) {
      name = `${user?.result?.firstName} ${user?.result?.lastName}`;
    } else {
      name = user?.result?.name;
    }
    if (currentId) {
      dispatch(
        updateIdea(currentId, {
          ...ideaData,
          name,
        })
      );
    } else {
      dispatch(
        createIdea({
          ...ideaData,
          name,
        })
      );
    }

    clearForm();
  };

  // handle clearing form
  const clearForm = () => {
    setCurrentId(null);
    setIdeaData({
      title: '',
      description: '',
      tags: '',
      selectedFile: '',
    });
  };

  if (!user) {
    return (
      <Paper className={classes.paper}>
        <Typography variant='h6' align='center'>
          Please sign in to store ideas.
        </Typography>
      </Paper>
    );
  }
  return show ? (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
        style={{ position: 'relative' }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
          }}
        >
          <Button
            sx={{
              color: '#4B3542',
              marginRight: '4rem',
            }}
            onClick={() => setShow(false)}
          >
            <EjectIcon />
          </Button>
          <Typography var='h6' color='#4B3542' sx={{ lineHeight: '2.2' }}>
            {currentId ? 'Change Your Idea!' : 'Store A New Idea!'}
          </Typography>
        </div>
        <TextField
          name='title'
          variant='filled'
          label='Title'
          sx={{
            input: {
              color: '#4B3542 !important',
            },
          }}
          fullWidth
          value={ideaData.title}
          onChange={(e) => setIdeaData({ ...ideaData, title: e.target.value })}
        />
        <TextField
          name='description'
          variant='filled'
          label='Description'
          sx={{
            input: {
              color: '#4B3542 !important',
            },
          }}
          fullWidth
          value={ideaData.description}
          onChange={(e) =>
            setIdeaData({ ...ideaData, description: e.target.value })
          }
        />
        <TextField
          name='tags'
          variant='filled'
          label='Tags'
          sx={{
            input: {
              color: '#4B3542 !important',
            },
          }}
          fullWidth
          value={ideaData.tags}
          onChange={(e) =>
            setIdeaData({ ...ideaData, tags: e.target.value.split(',') })
          }
        />
        <div className={classes.fileInput}>
          Select an image
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setIdeaData({ ...ideaData, selectedFile: base64 })
            }
          />
        </div>
        <ButtonGroup className={classes.buttonGroup}>
          <Button variant='contained' color='secondary' onClick={clearForm}>
            Cancel
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            type='submit'
          >
            Store
          </Button>
        </ButtonGroup>
      </form>
    </Paper>
  ) : (
    <Paper
      className={classes.hiddenPaper}
      onClick={() => {
        setShow(true);
      }}
    >
      <Button sx={{ color: '#4B3542' }}>
        <AddCircleIcon />
      </Button>
      <Typography
        sx={{ lineHeight: '2' }}
        variant='h6'
        align='center'
        color='#4B3542'
      >
        Store A New Idea!
      </Typography>
    </Paper>
  );
};

export default Form;
