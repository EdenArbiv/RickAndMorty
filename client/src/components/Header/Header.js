import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel(label) {
    return (
        <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        {/* <MenuIcon/> */}
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        Rick And Morty
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

export default function EnableColorOnDarkAppBar() {
    const [darkmode, setDarkmode] = React.useState(true)
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        {
            darkmode ? 
            <AppBar position="static" color="primary">
            {appBarLabel('default')}
            </AppBar>
            :
            <AppBar position="static" color="primary" enableColorOnDark>
            {appBarLabel('enableColorOnDark')}
            </AppBar>

        }
      </ThemeProvider>
    </Stack>
  );
}