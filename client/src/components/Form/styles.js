import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: useTheme().spacing(1),
    },
  },
  paper: {
    padding: useTheme().spacing(2),
    background: '#8D99AE !important',
    minWidth: '280px',
  },
  hiddenPaper: {
    padding: useTheme().spacing(2),
    background: '#8D99AE !important',
    width: '60%',
    minWidth: '260px',
    margin: 'auto',
    cursor: 'pointer',
    display: 'flex',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  storeButton: {
    background: '#8D99AE !important',
    textAlign: 'center',
  },
  buttonGroup: {
    padding: useTheme().spacing(2),
  },
}));
