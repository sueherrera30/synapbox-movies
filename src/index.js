import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import App from './App';
import './index.css';

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
     <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Root />,document.getElementById('root'));


serviceWorker.unregister();

