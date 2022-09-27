import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: useTheme().spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: useTheme().spacing(2),
    background: '#8D99AE !important',
  },
  root: {
    '& .MuiTextField-root': {
      margin: useTheme().spacing(1),
    },
  },
  avatar: {
    margin: useTheme().spacing(1),
    backgroundColor: useTheme().palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: useTheme().spacing(3),
  },
  submit: {
    margin: useTheme().spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: useTheme().spacing(2),
  },
}));
