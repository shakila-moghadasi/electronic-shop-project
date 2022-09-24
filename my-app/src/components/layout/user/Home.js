import { Box } from '@mui/material';
import React from 'react';
import Off from '../../user/Off';
import Slider from '../../user/Slider';


export default function Home() {
  return (
    <div>
      <Box sx={{ pt:7 , backgroundColor: '#E0FFFF' , pl:{ xs:2.5 , md:0 } }}>
        <Slider/>
        <Off/>
      </Box>
    </div>
  )
}

