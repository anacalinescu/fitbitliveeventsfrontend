import React from 'react';
import './App.css';
import SimpleTabs from './Menu';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Router, hashHistory as history } from 'react-router';
import routes from './Routes';
import ReactDOM from "react-dom";

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#424242',
    }
  }
});

const useStyles = makeStyles({
  root: {
    background: '#424242',
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
    <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div>
      <SimpleTabs/>
    </div>
    </MuiThemeProvider>
    </>
  );
}

export default App;
