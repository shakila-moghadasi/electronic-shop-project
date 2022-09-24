import * as React from 'react';
import axios from 'axios';
import { useState , useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ImageListItem from '@mui/material/ImageListItem';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import Basketshop from './Basketshop';
import { AddToBasket } from '../../user/AddToBasket';

export default function CardCommodity () {
  const idCommodity = useLocation();
  const [data , setdata] = useState(null);
  const [showCard , setshowCard] = useState(true);
  const show = useLocation();

  const { handleClick , cart , setCart , handleRemoveCookie } = AddToBasket();


  useEffect(() => {
    axios.get(`http://localhost:3002/products`)
    .then((res) => {
        setdata(res.data)
    })
    .catch((err) => {
        alert(err.response.statusText);
    });
  },[]);

  useEffect(() => {
    setshowCard(show.state.name);
  },[show]);


  return (
    <>
    {(!showCard) ? 
    (
      <Card sx={{ pt:30 , pl:10 , pb:7 , backgroundColor: '#E0FFFF' , width:{ xs:380 , md:1270 }}}>
      {data?.map((record) => {
        if(record.id === idCommodity.state.id){
          return(
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ImageListItem sx={{ width:{ xs:300 , md:400 } }}>
                  <img
                    src={`http://localhost:3002/files/${record.image}`}
                    alt={record.title}
                    loading="lazy"
                  />
                </ImageListItem>
              </Grid>
              <Grid item xs={12} md={6} sx={{ pt:5 , pl:2 , pr:10 }}>
                <CardContent>
                  <Typography variant="h5">
                    {record.title}
                  </Typography>
                </CardContent>
                <Box sx={{ pt:5 }}>
                  <Typography variant="h6">
                    توضیحات : 
                  </Typography>
                  <Typography>
                    {record.data}
                  </Typography>
                </Box>
                <Box sx={{ pt:10 }}>
                  <Button 
                    sx={{backgroundColor: '#90EE90'}}
                    onClick={() => {
                      handleClick(record)
                    }}
                  >
                  اضافه به سبد خرید
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )
        }
      })}
      </Card>
    ) : <Basketshop cart={cart} setCart={setCart} removeCookie={handleRemoveCookie}/> }
    </>
  );
}
