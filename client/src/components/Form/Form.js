import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createIdea, updateIdea } from '../../actions/ideas';

const Form = ({ currentId, setCurrentId }) => {
  const [ideaData, setIdeaData] = useState({
    creator: '',
    title: '',
    description: '',
    tags: '',
    selectedFile: '',
  });

  // get current selected idea if there is one
  const idea = useSelector((state) =>
    currentId ? state.ideas.find((m) => m._id === currentId) : null
  );

  const classes = useStyles();

  const dispatch = useDispatch();

  // set form with current idea if exists
  useEffect(() => {
    if (idea) setIdeaData(idea);
  }, [idea]);

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateIdea(currentId, ideaData));
    } else {
      dispatch(createIdea(ideaData));
    }

    clearForm();
  };

  // handle clearing form
  const clearForm = () => {
    setCurrentId(null);
    setIdeaData({
      creator: '',
      title: '',
      description: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography var='h6' color='white'>
          {currentId ? 'Edit' : 'Store'} Your Idea!
        </Typography>
        <TextField
          name='creator'
          variant='filled'
          label='Creator'
          sx={{
            input: {
              color: '#FFF !important',
            },
          }}
          value={ideaData.creator}
          onChange={(e) =>
            setIdeaData({ ...ideaData, creator: e.target.value })
          }
        />
        <TextField
          name='title'
          variant='filled'
          label='Title'
          sx={{
            input: {
              color: '#FFF !important',
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
              color: '#FFF !important',
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
              color: '#FFF !important',
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
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          Store
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={clearForm}
          fullWidth
        >
          Cancel
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
