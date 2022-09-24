import React from 'react';
import HeaderAdmin from '../../admin/HeaderAdmin';
import { Box } from '@mui/material';

const Management = (props) => {
  return (
    <div>
      <Box sx={{backgroundColor: '#E0FFFF' , height:800}}>
      <HeaderAdmin/>
        {props.children}
      </Box>
    </div>
  )
}

export default Management;
