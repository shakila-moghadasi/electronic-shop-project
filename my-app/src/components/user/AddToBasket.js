import { useState , useEffect } from 'react';
import { useCookies } from 'react-cookie';


const AddToBasket = (record) => {
  const [Cookies, setCookie , removeCookie] = useCookies(['cookie-name']);
  const [cart , setCart] = useState([]);


  const handleClick = (record) => {
    // if (cart.indexOf(record) !== -1) return;
    setCookie( record.id , record , { path:"/" });
  };
  
  useEffect(() => {
    setCart([Cookies])
  },[]);
  console.log(cart);

  function handleRemoveCookie(id) {
    removeCookie(id);
  }

  return { handleClick  , cart , setCart , handleRemoveCookie };
};

export { AddToBasket };