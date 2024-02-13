import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchAppBar from '../SearchField/SearchField';
import "./AppBar.css";


import { ClearStorage } from '../../services/SessionStorage'
import { useSelector, useDispatch } from 'react-redux';
import { doLogout } from '../../Redux/user/slice';


const pages = [
  { title: "Timeline", linkTo: "http://localhost:4200/home", enable: true },
  { title: "Comunidades", linkTo: "http://localhost:4200/UnderConstruction", enable: true },
  { title: "Gaming", linkTo: "http://localhost:4200/gaming", enable: true }

]
const settings = [
  { title: "Perfil", linkTo: "http://localhost:4200/perfil", enable: true },
  { title: "Conta", linkTo: "#", enable: true },
  { title: "Dashboard", linkTo: "#", enable: true },
  { title: "Sair", linkTo: "http://localhost:4200", enable: true }
]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  //const loginStatus = useSelector(state => state?.doLogin)
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(doLogout());
    ClearStorage();

  }



  return (
    <AppBar position="sticky" sx={{
      backgroundColor: "rgb(49, 2, 124)", // ou não definido para a cor clara padrão do material

    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

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
            LOGO
          </Typography>



          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/*   {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Button href={page.linkTo}>{page.title}</Button>
                </MenuItem>
              ))} */}

              {pages.map((page, index) => (

                isAuth === true && page.enable === true &&

                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  {/*  <Typography textAlign="center">{page}</Typography> */}
                  {/*  <Typography textAlign="center" href={page.linkTo}>{page.title}</Typography> */}
                  <Button href={page.linkTo}>{page.title}</Button>

                </MenuItem>
              ))}
            </Menu>
          </Box>


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
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {/*             {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                href={page.linkTo}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))} */}

            {pages.map((page, index) => (
              isAuth === true && page.enable === true &&

              <Button
                key={index}
                onClick={handleCloseNavMenu}
                href={page.linkTo}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>


            ))}


          </Box>

          {(isAuth &&

            <Box className="search" sx={{
              display: 'flex',
              m: "12px"
            }}>
              <SearchAppBar />
            </Box>

          )}

          {(isAuth &&
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={currentUser.name} src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>
                    {/*   <Typography textAlign="center">{setting}</Typography> */}
                    <Button href={setting.linkTo}>{setting.title}</Button>
                    
                    {setting.title === 'Sair' &&
                      <Button href={setting.linkTo} onClick={handleLogout}>{setting.title}</Button>
                    }
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          )}

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
