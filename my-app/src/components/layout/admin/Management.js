import React from 'react';
import HeaderAdmin from '../../admin/HeaderAdmin';
import { Box } from '@mui/material';
import { Navigate , useLocation } from 'react-router-dom';
import Managementcommodity from './ManagementCommodity';
import Ordered from './Ordered';

const Management = (props) => {
  
  //data : issubmited from Login and id from HeaderAdmin
  const data = useLocation();
  let auth = {'token': data }


  return (
    <div>
      <Box sx={{backgroundColor: '#E0FFFF' , height:800}}>
        <HeaderAdmin />
        {( data.state.id === 2 ) ? <Ordered/> : <Managementcommodity/>}
        {auth.token ? props.children : <Navigate to="/login"/>}
      </Box>
    </div>
  )
}

export default Management;
