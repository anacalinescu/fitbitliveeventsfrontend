import React from 'react';
import './App.css';
import MainMenu from './MainMenu'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { MuiThemeProvider, responsiveFontSizes} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainRouter from "./MainRouter";

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
  return (
      <>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
            <header>
              <MainMenu />
            </header>

            <main>
              <MainRouter />
            </main>
        </MuiThemeProvider>
      </>
  );
}
