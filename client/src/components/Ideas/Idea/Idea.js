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
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { deleteIdea, upvoteIdea, downvoteIdea } from '../../../actions/ideas';

const Idea = ({ idea, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={idea.selectedFile}
        title={idea.title}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{idea.creator}</Typography>
        <Typography variant='body2'>
          {moment(idea.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white' }}
          size='small'
          onClick={() => setCurrentId(idea._id)}
        >
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {idea.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant='h5' gutterBottom>
        {idea.title}
      </Typography>
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          gutterBottom
        >
          {idea.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button
            size='small'
            color='primary'
            onClick={() => dispatch(upvoteIdea(idea._id))}
          >
            <ThumbUpAltIcon fontSize='small' />
          </Button>
          <Typography color='#1976d2'>{idea.upvoteCount}</Typography>
          <Button
            size='small'
            color='primary'
            onClick={() => dispatch(downvoteIdea(idea._id))}
          >
            <ThumbDownAltIcon fontSize='small' />
          </Button>
        </div>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(deleteIdea(idea._id))}
        >
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Idea;
