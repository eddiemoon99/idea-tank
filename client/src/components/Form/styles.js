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
  buttonSubmit: {
    marginBottom: '10px !important',
  },
}));
