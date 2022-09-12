import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: useTheme().spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  empty: {
    textAlign: 'center',
    padding: '20% 0',
  },
}));
