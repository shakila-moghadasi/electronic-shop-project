import * as React from 'react';
import Radio from '@mui/material/Radio';
import Waitingcommodity from '../layout/admin/WaitingCommodity';
import PostedCommodity from '../layout/admin/PostedCommodity';
import { Box } from '@mui/material';


export default function RadioChange() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const table = React.useMemo(() => {
    return selectedValue=="a" ? <Waitingcommodity/>:<PostedCommodity/>
  },[selectedValue]);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
      <Box>
        <Radio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
          value='a'
          label="Commodity"
          sx={{ ml:2 }}
        />
        کالاهای در حال انتظار
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
          value='b'
          label="Commodity"
          sx={{ ml:10 }}
        />  
        کالاهای پست شده
        {table}
      </Box>
  );
}