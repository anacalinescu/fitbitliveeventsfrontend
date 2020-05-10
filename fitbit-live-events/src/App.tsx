import React from 'react';
import './App.css';
import MainMenu from './components/MainMenu'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { MuiThemeProvider, responsiveFontSizes} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainRouter from "./components/MainRouter";
import AccountMainMenu from './components/AccountMainMenu'

let theme = createMuiTheme({
  palette: {
    background: {
      default: '#292d35',
    },
    text: {
      primary: '#000000',
    }
  },
});

theme = responsiveFontSizes(theme);

export default function App() {

  const renderMenu = () => {   
    console.log(window.localStorage.getItem('user')) 
    if (!window.localStorage.getItem('user')) {  
      console.log("NO LOGIN") 
      return <MainMenu />
    } else {
      console.log("LOGIN")
      return <AccountMainMenu />
    }
  }

  return (
      <>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
            <header>
              { renderMenu() }
            </header>

            <main>
              <MainRouter />
            </main>
        </MuiThemeProvider>
      </>
  );
}
