import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { StyledLogo } from './styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';



export default function PrimarySearchAppBar() {
  const navigate = useNavigate()
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <StyledLogo src={'https://pbs.twimg.com/media/FTC2Yl6UsAUNN3D?format=jpg&name=small'}/>
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Rick And Morty
          </Typography>
          <Button onClick={() => window.location.href.includes('/search') ? navigate('/') : navigate('/search') } sx={{marginLeft: 5, border: '1px solid white'}} variant="inhirt">
            {
                window.location.href.includes('/search') ?
                <>
                <KeyboardReturnIcon/> Return
                </>
                :
                <>
                <SearchIcon /> Search 
                </>
            }
            </Button>
        </Toolbar>
      </AppBar>

    </Box>
  );
}