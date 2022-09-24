import React from 'react';
import HeaderAdmin from '../../admin/HeaderAdmin';
import RadioChange from '../../admin/RadioChange';
import { Box } from '@mui/material';

const Ordered = (props) => {
  return (
    <div>
      <Box sx={{backgroundColor: '#E0FFFF' , height:800}}>
        <HeaderAdmin/>
        <RadioChange/>
        {props.children}
      </Box>
    </div>
  )
}

export default Ordered;