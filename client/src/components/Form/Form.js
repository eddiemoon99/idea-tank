import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createMemory, updateMemory } from '../../actions/memories';

const Form = ({ currentId, setCurrentId }) => {
  const [memoryData, setMemoryData] = useState({
    creator: '',
    title: '',
    description: '',
    tags: '',
    selectedFile: '',
  });

  const memory = useSelector((state) =>
    currentId ? state.memories.find((m) => m._id === currentId) : null
  );

  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    if (memory) setMemoryData(memory);
  }, [memory]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateMemory(currentId, memoryData));
    } else {
      dispatch(createMemory(memoryData));
    }

    clearForm();
  };

  const clearForm = () => {
    setCurrentId(null);
    setMemoryData({
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
        <Typography var='h6'>
          {currentId ? 'Edit' : 'Store'} Your Memory
        </Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={memoryData.creator}
          onChange={(e) =>
            setMemoryData({ ...memoryData, creator: e.target.value })
          }
        />
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={memoryData.title}
          onChange={(e) =>
            setMemoryData({ ...memoryData, title: e.target.value })
          }
        />
        <TextField
          name='description'
          variant='outlined'
          label='Description'
          fullWidth
          value={memoryData.description}
          onChange={(e) =>
            setMemoryData({ ...memoryData, description: e.target.value })
          }
        />
        <TextField
          name='Tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={memoryData.tags}
          onChange={(e) =>
            setMemoryData({ ...memoryData, tags: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setMemoryData({ ...memoryData, selectedFile: base64 })
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
          Submit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={clearForm}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
