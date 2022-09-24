import React, { useState } from "react";
import { api } from "../../admin/Api";
import { useLocation } from 'react-router-dom';
import { 
  Button ,
  TextField ,
  Grid,
  Box
} from '@mui/material';
import { AddToBasket } from "../../user/AddToBasket";

const Formshop = () => {
  const Price = useLocation();
  const [formValues , setFormValues] = useState([]);
  const [number , setnumber] = useState(0);
  const [orderDate  , setorderDate ] = useState('');

  console.log(Price);
  const { handleRemoveCookie } = AddToBasket();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('http://localhost:3002/orders', {
      customerDetail : formValues ,
      amount : Price.state.id ,
      orderNumber : number ,
      orderDate : orderDate  ,
      orderStatus : 2 , 
      createdAt: new Date(),
      orderItems : Price.state.name.map((item) => (Object.values(item)).map((data) => 
      [{
        title: data.title,
        price: data.price,
        amount: data.amount
      }]
      ))
    })
    Price.state.name.map((item) => (Object.values(item)).map((data) =>
      handleRemoveCookie(data.id)
    ))
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <Box sx={{backgroundColor: '#E0FFFF' , pt:5 , height:800}}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="first-input"
            name="firstName"
            label="First Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <br/>
        <Grid item>
          <TextField
            id="last-input"
            name="lastName"
            label="Last Name"
            type="text"
            onChange={handleInputChange}
          />
        </Grid>
        <br/>
        <Grid item>
          <TextField
            id="adress-input"
            name="Adress"
            label="Adress"
            type="text"
            onChange={handleInputChange}
          />
        </Grid>
        <br/>
        <Grid item>
          <TextField
            id="number-input"
            name="number phone"
            label="number phone"
            type="text"
            value={formValues.number}
            onChange={(e) => setnumber(e.target.value)}
          />
        </Grid>
        <br/>
        <Grid item>
          <TextField
            id="Date-input"
            name="Date Delevery"
            type="date"
            onChange={(e) => setorderDate(e.target.value)}
          />
        </Grid>
        <br/>
        <Button sx={{backgroundColor: '#90EE90'}} type="submit">
          payment
        </Button>
      </Grid>
      </Box>
    </form>
    </>
  );
};
export default Formshop;