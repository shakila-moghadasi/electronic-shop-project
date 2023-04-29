import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Tab , Tabs , AppBar, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Link, Outlet , useNavigate } from 'react-router-dom';

const pages = ['کالاها', 'پیگیری سفارش ها'];

const HeaderAdmin = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
    <AppBar position="static" sx={{ backgroundColor: '#3CB371' , mb:3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Button
            noWrap
            value={"/"}
            label="Ordered"
            component={Link}
            to={"/"}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'white',
              textDecoration: 'none',
            }}
          >
            بازگشت به سایت
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
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
                display: { xs: 'white', md: 'none' },
              }}
            >
              {pages.map((page , index) => (
                <MenuItem 
                  key={page} 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate( '/Management' , {state:{ id:index+1 }} )
                  }}
                  >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem 
                onClick={handleCloseNavMenu}
                value={"/"}
                component={Link}
                to={"/"}
                >
                  <Typography textAlign="center">بازگشت به سایت</Typography>
              </MenuItem>
            </Menu>
          </Box>
        <Tabs sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} textColor="white" >
          <Tab
            label="کالاها"
            onClick={(e) => {
              e.preventDefault();
              navigate( '/Management' , {state:{ id:1 }} )
            }}
          />
          <Tab
            label="پیگیری سفارش ها"
            onClick={(e) => {
              e.preventDefault();
              navigate( '/Management' , {state:{ id:2 }} )
            }}
          />
        </Tabs>
        

          <Box sx={{ color: 'white' }}>
                پنل مدیریت فروشگاه
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet/>
    </div>
  );
};
export default HeaderAdmin;