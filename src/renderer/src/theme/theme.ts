import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#512da8',
      light: 'rgba(81, 45, 168, 0.5)'
    },
    secondary: {
      main: '#673ab7'
    },
    grey: {
      700: grey[700]
    }
  }
});

export default theme;
