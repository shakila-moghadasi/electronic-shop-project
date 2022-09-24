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
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = data.find((user) => user.email === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
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
          <Grid item xs={12}>
            <TextField label="email" name="uname" type={'email'} required></TextField>
            {renderErrorMessage("uname")}
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" name="pass" type={'password'} required></TextField>
            {renderErrorMessage("pass")}
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" sx={{backgroundColor: '#90EE90'}}> Login </Button>
          </Grid>
        </Grid>
      </Box>
      </form>
    </div>
  );
  return (
    <div>
      {isSubmitted ? navigate('/commodity') : renderForm}
    </div>
  );
};

export default Login;