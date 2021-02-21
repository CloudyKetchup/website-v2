import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#181818',
    },
    secondary: {
      main: '##f21f3c',
    },
    text: {
      primary: "#fff"
    },
    background: {
      default: '#101010',
      paper: "#181818"
    },
  },
});

export default theme;
