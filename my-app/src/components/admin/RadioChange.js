import * as React from 'react';
import Radio from '@mui/material/Radio';
import Waitingcommodity from '../layout/admin/WaitingCommodity';
import PostedCommodity from '../layout/admin/PostedCommodity';


export default function RadioChange() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const table = React.useMemo(() => {
    return selectedValue=="a" ? <Waitingcommodity/>:<PostedCommodity/>
  },[selectedValue]);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
    <Radio
      checked={selectedValue === 'a'}
      onChange={handleChange}
      name="radio-buttons"
      inputProps={{ 'aria-label': 'A' }}
      value='a'
      label="Commodity"
    />
    waiting commodity
    <Radio
      checked={selectedValue === 'b'}
      onChange={handleChange}
      name="radio-buttons"
      inputProps={{ 'aria-label': 'B' }}
      value='b'
      label="Commodity"
    />  
    commodity posted
    {table}
    </div>
  );
}