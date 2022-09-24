import { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem} from '@mui/material';


export default function ModalWaitingOrders(props) {
  const [data , setdata] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3002/orders`)
    .then((res) => {setdata(res.data)})
    .catch((err) => {alert(err.response.statusText);
    });
  } , [] );
  console.log(data);

  return (
    <div>
        {data?.map((record) => {
            if(record.id === props.id){
            {console.log(record)}
            return(
            <List key={record.id}>
                <ListItem>{record.customerDetail.firstName}</ListItem>
                <ListItem>{record.customerDetail.lastName}</ListItem>
            </List>
            )
            }
        })}
    </div>
  )
}