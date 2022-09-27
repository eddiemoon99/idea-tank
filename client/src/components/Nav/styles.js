import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

export default makeStyles((theme) => ({
  appHeader: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row !important',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#5F0F40 !important',
    position: 'relative',
  },
  title: {
    color: '#6dbfab',
    [useTheme().breakpoints.down(600)]: {
      fontSize: '2rem',
    },
    textDecoration: 'none',
  },
}));
