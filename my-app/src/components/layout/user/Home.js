import { Box, Typography } from '@mui/material';
import React from 'react';
import DataOff from '../../user/DataOff';
import Slider from '../../user/Slider';


export default function Home() {
  return (
    <div>
      <Box sx={{ pt:7 , backgroundColor: '#E0FFFF' , pl:{ xs:2.5 , md:0 } }}>
        <Slider/>
        <Typography sx={{direction:"rtl" , pr:5 , pt:10 , fontSize:50}}> کالا های دارای تخفیف </Typography>
        <DataOff/>
      </Box>
    </div>
  )
}

