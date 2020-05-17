import React from 'react';
import {AppBar, Toolbar, Button, ThemeProvider, IconButton} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b28c47',
    },
    secondary: {
      main: "#fff9ef",
    },
  },
});

class Navbar extends React.Component {
  render() {
    return(
      <div>
        <ThemeProvider theme={theme}>
          <AppBar elevation={0}>
            <Toolbar>
              <IconButton aria-label="home" href="/" color="secondary">
                <HomeIcon />
              </IconButton>
              <Button href="https://www.linkedin.com/in/leoxia96/" target="_blank" color="secondary">Work</Button>
              <Button href="https://www.instagram.com/c3pleo/" target="_blank" color="secondary">Personal</Button>
              <Button href="https://medium.com/@c3pleo" target="_blank" color="secondary">Blog</Button>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </div>
    )
  }
}

export default Navbar
