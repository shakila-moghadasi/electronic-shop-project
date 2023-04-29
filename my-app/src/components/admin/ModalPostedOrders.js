import { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, Typography} from '@mui/material';
import { Box } from '@mui/system';


export default function ModalPostedOrders(props) {
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
                <Typography>نام خریدار :</Typography>
                <ListItem >{`${record.customerDetail.firstName} ${record.customerDetail.lastName}`}</ListItem>
                <Typography sx={{ pt:3 }}>اجناس خریداری شده : </Typography>
                {(record.orderItems).map((title1) => title1.map((title2) => {
                  console.log(title2[0])
                  return(
                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <ListItem>{title2[0].title}</ListItem>
                        <ListItem>{` ${title2[0].amount} :تعداد `}</ListItem>
                      </Box>
                  )
                }))}
                <Typography sx={{ pt:3 }}>آدرس :</Typography>
                <ListItem >{`${record.customerDetail.Adress}`}</ListItem>
                <Typography sx={{ pt:3 }}>شماره تلفن :</Typography>
                <ListItem >{`${record.orderNumber}`}</ListItem>
            </List>
            )
            }
        })}
    </div>
  )
}