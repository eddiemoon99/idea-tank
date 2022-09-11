import React from 'react';
import Memory from './Memory/Memory';
import useStyles from './styles';

const Memories = () => {
  // const classes = useStyles();
  return (
    <>
      <h1>Memories</h1>
      <Memory />
      <Memory />
    </>
  );
};

export default Memories;
