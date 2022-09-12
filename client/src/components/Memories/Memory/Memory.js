import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { deleteMemory, likeMemory } from '../../../actions/memories';

const Memory = ({ memory, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={memory.selectedFile}
        title={memory.title}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{memory.creator}</Typography>
        <Typography variant='body2'>
          {moment(memory.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white' }}
          size='small'
          onClick={() => setCurrentId(memory._id)}
        >
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {memory.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant='h5' gutterBottom>
        {memory.title}
      </Typography>
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          gutterBottom
        >
          {memory.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(likeMemory(memory._id))}
        >
          <ThumbUpAltIcon fontSize='small' />
          Like {memory.likeCount}
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(deleteMemory(memory._id))}
        >
          <ThumbUpAltIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Memory;
