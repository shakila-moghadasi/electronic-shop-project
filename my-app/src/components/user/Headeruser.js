import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Tabs from '@mui/material/Tabs';
import { styled, alpha } from '@mui/material/styles';
import { Outlet , Link, useNavigate } from 'react-router-dom';


const pages = ['سبد خرید', 'مدیریت'];
const routes = [ '/card' , '/login' ]

const Headeruser = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [data , setdata] = useState(null);
  const [filteredData , setFilteredData] = useState([]);
  const [wordEntered , setWordEntered] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3002/products`)
    .then((res) => {setdata(res.data)})
    .catch((err) => {alert(err.response.statusText);
    });
  } , [] );

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 40,
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(1), 
      width: 'auto',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 0, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('xs')]: {
        width: '8ch',
        '&:focus': {
          width: '10ch',
        },
      },
    },
  }));

  const handleFilter = (event) => {
    event.preventDefault();
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      console.log(value);
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
    <div>
    <AppBar sx={{ backgroundColor: '#3CB371' }}>
      <Container maxWidth="xl" position="static">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit" 
            aria-label="open drawer"
            sx={{ mr: 2 , color:'white'}}
            onClick={handleOpenNavMenu}
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
              {pages.map((page , index) => (
                <MenuItem 
                  key={page} 
                  onClick={() => {
                    setShow(true)
                    navigate(routes[index] , {state:{ name:show }})
                  }}
                  value={routes[index]} 
                  >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page , index) => (
              <Button
                key={page}
                onClick={() => {
                  setShow(true)
                  navigate(routes[index] , {state:{ name:show }})
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
                value={routes[index]}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Search>
            <Button 
              onClick={(e) => {
                e.preventDefault();
                navigate("/tab",{state:{ id:0 , name:filteredData }})
              }}
            >
              <SearchIcon/>
            </Button>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={wordEntered}
              onChange={handleFilter}
            />
          </Search>
          <Box sx={{ flexGrow: 0 , color: 'black'}}>
              <IconButton sx={{ ml: 2 }}>
                <Avatar 
                  src="/static/images/avatar/2.jpg"
                  component="a"
                  href="/" 
                />
              </IconButton>
          </Box>
        </Toolbar>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 0, direction: 'rtl' , display: { xs: 'none', md: 'flex' } }}>
                <Tabs sx={{ pt:2 }}>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:0 , name:filteredData}})
                    }}>خانه
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:1 , name:filteredData}})
                    }}>قطعات و تجهیزات الکترونیکی
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:2 , name:filteredData}})
                    }}>ابزارآلات و تجهیزات
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:3 , name:filteredData}})
                    }}>تجهیزات رباتیک
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:4 , name:filteredData}})
                    }}>ماژول ها
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:5 , name:filteredData}})
                    }}>سنسور ها
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:6 , name:filteredData}})
                    }}>مینی کامپیوتر ها
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:7 , name:filteredData}})
                    }}>نمایشگر ها
                    </Button>
                </Tabs>
            </Box>
        </Box>
      </Container>
      <Toolbar disableGutters>
            <Box sx={{ borderBottom: 1, direction: 'rtl' , display: { xs: 'flex', md: 'none' } , flexWrap: 'wrap'}}>
                <Tabs>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:0 , name:filteredData}})}}
                    >خانه
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:1 , name:filteredData}})}}
                    >قطعات و تجهیزات الکترونیکی
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:2 , name:filteredData}})}}
                    >ابزارآلات و تجهیزات
                    </Button>
                </Tabs>
                <Tabs textColor="inherit" indicatorColor="white">
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:3 , name:filteredData}})}}
                    >تجهیزات رباتیک
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:4 , name:filteredData}})}}
                    >ماژول ها
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:5 , name:filteredData}})}}
                    >سنسور ها
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:6 , name:filteredData}})}}
                    >مینی کامپیوتر ها
                    </Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      navigate("/tab",{state:{id:7 , name:filteredData}})}}
                    >نمایشگر ها
                    </Button>
                </Tabs>
            </Box>
      </Toolbar>
    </AppBar>
    </div>  
    <Outlet/>
    </>
  );
};
export default Headeruser;

