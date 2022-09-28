import React from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';

import { Container } from "@mui/system";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom';
interface Props{
  isLoggedIn?:boolean;
}
const NavigationBar = (props:Props)=>{
    const {isLoggedIn} = props;
    const pages = ['Dashboard','Skills', 'Experiences', 'Personal Projects'];
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };
    const navigate = useNavigate();
    const handleCloseNavMenu = (e:any) => {
      // Added e.currentTarget.dataset.myValue because mobile version with menu drop down requires this event property to navigate between routes.
      if(e.target.id.toLowerCase() === "Dashboard".toLowerCase() || e.currentTarget.dataset.myValue?.toLowerCase() === "Dashboard".toLowerCase()){
        navigate("/Dashboard");
      }else if(e.target.id.toLowerCase() === "Skills".toLowerCase() || e.currentTarget.dataset.myValue?.toLowerCase() === "Skills".toLowerCase()){
        navigate("/Skills")
      }
      setAnchorElNav(null);
    };
     
    return (
        <AppBar position="static" style={{}}>
            <Container maxWidth="xl">
              <Toolbar id="toolbar" disableGutters>
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  GIABAO
                </Typography>
              
{   !isLoggedIn && <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={(e)=>handleCloseNavMenu(e)}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem data-my-value={page} id={page} key={page} onClick={(e)=>handleCloseNavMenu(e)}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>}
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GIABAO
            </Typography>
{ !isLoggedIn && <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  id={page}
                  key={page}
                  onClick={(e)=>handleCloseNavMenu(e)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>}
              </Toolbar>
            </Container>
        </AppBar>  
    )
}


export default NavigationBar;