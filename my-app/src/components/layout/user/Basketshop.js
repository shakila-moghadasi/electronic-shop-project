import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Basketshop = ({ cart , setCart , removeCookie }) => {
  const navigate = useNavigate();
  const [price , setPrice] = useState(0);
  const [amount , setamount] = useState();
  const [newcart , setnewcart] = useState();
  console.log(cart[0]);

  const handleRemove = (id) => {
    const arr = cart.map((item) => (Object.values(item).filter((item) => item.id !== id)));
    setCart(arr);
    handlePrice();
    removeCookie(id)
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (
      Object.values(item).map((commodity) => (ans += commodity.amount * commodity.price))
    ));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });


  const handleChange = async (item, d) => {
    setamount(item.amount + d);
    item.amount += d;
      await axios.put(`http://localhost:3002/products/${item.id}` , {
        country: item.country,
        image: item.image,
        title: item.title,
        category: item.category,
        categoryindex: item.categoryindex,
        type: item.type,
        id: item.id,
        price: item.price,
        amount: item.amount,
        count: item.count,
        off: item.off,
        commodity: item.commodity,
        data: item.data
      })
      setCart([...item])
  };


  return (
    <Box sx={{ pt:25 , backgroundColor: '#E0FFFF'}}>
      <Box sx={{pl:3}}>
      <article>
    {cart?.map((commodity) => (
      Object.values(commodity).map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}تومان</span>
            <br/>
            <button onClick={() => handleRemove(item.id)}>حذف از سبد خرید</button>
          </div>
        </div>
    ))
    ))}
      <Box sx={{pt:10}}>
        <span>قیمت تمام شده برای شما</span>
        <span>Toman - {price}</span>
      </Box>
      <Button 
        sx={{ mt:10 , backgroundColor: '#90EE90' ,  mb:2 , color:"black"}}
        onClick={() => {
          navigate('/form' , {state:{ id:price , name:cart }})
        }}
      >
      ثبت خرید
      </Button>
    </article>
      </Box>
    </Box>
  );
};

export default Basketshop;
