import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data , setdata] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    axios.get('http://localhost:3002/users')
    .then((res) => {
        setdata(res.data)
    })
    .catch((err) => {
        alert(err.response.statusText);
    });
  },[]);

  console.log(data);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = data.find((user) => user.email === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const renderForm = (
    <div>
      <form onSubmit={handleSubmit}>
      <Box sx={{backgroundColor: '#E0FFFF' , height:800}}>
        <Grid
          sx={{p:10}}
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item >
            <TextField sx={{ width:{xs:200 , md:400} , mt:7 }} label="email" name="uname" type={'email'} required></TextField>
            {renderErrorMessage("uname")}
          </Grid>
          <Grid item >
            <TextField sx={{ width:{xs:200 , md:400} , my:2}} label="Password" name="pass" type={'password'} required></TextField>
            {renderErrorMessage("pass")}
          </Grid>
          <Grid item >
            <Button type="submit" sx={{backgroundColor: '#90EE90' , color:"black" , width:{xs:100 , md:200} , height:50}}> Login </Button>
          </Grid>
        </Grid>
      </Box>
      </form>
    </div>
  );
  return (
    <div>
      {isSubmitted ? (
        navigate('/Management' , {state:{ name:isSubmitted }})
        )
       : renderForm}
    </div>
  );
};

export default Login;