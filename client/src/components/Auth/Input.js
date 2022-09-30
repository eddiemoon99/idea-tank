import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Input = ({
  isHalf,
  name,
  value,
  label,
  handleChange,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={isHalf ? 6 : 12}>
      <TextField
        name={name}
        value={value}
        label={label}
        onChange={handleChange}
        variant='outlined'
        required
        fullWidth
        autoFocus={autoFocus}
        type={type}
        sx={{
          input: {
            color: '#4B3542 !important',
          },
        }}
        InputProps={
          name === 'password' || name === 'confirmPassword'
            ? {
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                      {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      ></TextField>
    </Grid>
  );
};

export default Input;
