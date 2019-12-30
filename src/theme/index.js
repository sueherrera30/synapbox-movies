import { createMuiTheme } from '@material-ui/core/styles';
import overrides from './overrides';

const theme = createMuiTheme({
  spacing: 8,
  overrides,
  palette: {
    primary:{
      main: '#0F28A9',
    },
    secondary: {
      main: '#FFCD02',
    },
  },
});

export default theme;