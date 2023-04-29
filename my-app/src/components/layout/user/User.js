import React from 'react';
import Headeruser from '../../user/Headeruser';
import Footeruser from '../../user/Footeruser';
import { Box } from '@mui/material';

const User = (props) => {
  return (
    <div>
      <Box sx={{ width:{ xs:450 , md:1300 } }}>
        <Headeruser/>
        {props.children}
        <Footeruser/>
      </Box>
    </div>
  )
}

export default User;