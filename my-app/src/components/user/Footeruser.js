import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ListItemIcon, ListItemText } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const style = {
  color: "white" ,
  backgroundColor: "#696969",
  borderTop: "1px solid #E7E7E7",
  padding: "20px",
  position: "sticky",
  left: "0",
};

export default function App() {
  return (
    <div>
      <Box sx={{ width:{ xs:420 , md:1310 } , height:{ xs:340 , md:200 }}} style={style}>
      <Typography sx={{ mt: 0, mb: 2 }} variant="h6" component="div">
        ABOUT US 
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <List>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon/>
                  </ListItemIcon>
                  <ListItemText>
                    <a href="mailto:info@ple-hotelxenia.com">info@ple-hotelxenia.com</a>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon/>
                  </ListItemIcon>
                  <ListItemText>
                    098-9216426299
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessIcon/>
                  </ListItemIcon>
                  <ListItemText>
                    Iran , zanjan , zanjan univercity
                  </ListItemText>
                </ListItem>
            </List>
        </Grid>
        <Grid item xs={12} md={6}>
            <List>
                <ListItem>
                  <ListItemIcon>
                    <WhatsAppIcon/>
                  </ListItemIcon>
                  <ListItemText>
                    098-9216426299
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InstagramIcon/>
                  </ListItemIcon>
                  <ListItemText>
                    @sh.moghadasi5928
                  </ListItemText>
                </ListItem>
            </List>
        </Grid>
      </Grid>
      </Box>
    </div>
  );
}