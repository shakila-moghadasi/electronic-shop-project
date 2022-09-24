import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Books from '../../user/Books';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button, Card, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AddToBasket } from '../../user/AddToBasket';
import Basketshop from './Basketshop';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.number.isRequired,
value: PropTypes.number.isRequired,
};
function a11yProps(index) {
return {
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
};
}


export default function Category(props) {
  const index = props.index;
  console.log(index);
  const [data , setdata] = useState(null);
  const [value , setValue] = useState(0);
  const navigate = useNavigate();
  const [showCard , setshowCard] = useState(true);

  const { handleClick , cart , setCart , handleRemoveCookie } = AddToBasket();

  useEffect(() => {
    setshowCard(props.show);
  },[props.show]);

  useEffect(() => {
    axios.get(`http://localhost:3002/products?commodity=tools&categoryindex=${index}`)
    .then((res) => {
        setdata(res.data)
    })
    .catch((err) => {
        alert(err.response.statusText);
    });
  },[]);
  console.log(data);

  const handleChange2 = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div>
      {(showCard) ? (
        <Box sx={{ pt:{xs:3 , md:7} , pl:{xs:3 , md:2}}}>
        <Box sx={{ direction: 'rtl' }}>
          <Tabs value={value} onChange={handleChange2} textColor="inherit" indicatorColor="white" sx={{ pt:20 , display: { xs: 'none', md: 'flex' }}}>
            <Tab sx={{mr:5 , backgroundColor: '#90EE90' , borderRadius: 10 , px: 35}} label="قطعات و ابزارها" {...a11yProps(0)}/>
            <Tab sx={{mr:4 , backgroundColor: '#90EE90' , borderRadius: 10 , px: 35}} label="کتاب ها" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <Box sx={{ direction: 'rtl' }}>
          <Tabs value={value} onChange={handleChange2} textColor="inherit" indicatorColor="white" sx={{ pt:20 , display: { xs: 'flex', md: 'none' }}} orientation="vertical">
            <Tab sx={{ml:6 , backgroundColor: '#90EE90' , borderRadius: 10 , px: 10 , mb:2}} label="قطعات و ابزارها" {...a11yProps(0)}/>
            <Tab sx={{ml:6 , backgroundColor: '#90EE90' , borderRadius: 10 , px: 10}} label="کتاب ها" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <Toolbar disableGutters>
          <TabPanel value={value} index={0}>
            <Box sx={{ display: 'flex', pt: 0, borderRadius: 1 }}>
              <Grid sx={{ width:{ xs:300 , md:1200 } , mt:0 , ml:3.5 }} container spacing={4}> 
              {data?.map((record) => {
                return(
                <Grid item xs={12} md={3}>
                  <Card sx={{ mr:2 , mb:1.5 , backgroundColor: '#90EE90' }} 
                    onClick={(e) => {
                      e.preventDefault();
                      navigate( '/card' , {state:{ id:record.id }} )
                    }}
                  >
                    <ImageListItem>
                      <img
                        src={`http://localhost:3002/files/${record.image}`}
                        alt={record.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={record.title}
                        subtitle={`${record.price}$`}
                        position="below"
                        sx={{ pl:2 }}
                      />
                    </ImageListItem>
                  </Card>
                  <Button 
                    onClick={() => {
                      handleClick(record)
                    }}
                    sx={{ mr:2 , mb:1.5 , backgroundColor: '#90EE90' }}
                  >
                  اضافه به سبد خرید
                  </Button>
                </Grid>
                )
              })}
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Books/>
          </TabPanel>
        </Toolbar>
      </Box>
      ) : <Basketshop cart={cart} setCart={setCart} removeCookie={handleRemoveCookie}/> }
    </div>
  )
}