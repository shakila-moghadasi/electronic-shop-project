import React from 'react';
import { Grid , Card , Button } from '@mui/material';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useNavigate } from 'react-router-dom';
import { AddToBasket } from './AddToBasket';

export default function SearchComponent(props) {
  const navigate = useNavigate();

  const { handleClick } = AddToBasket();
    
  return (
    <div>
        {(props.filteredData.length !== 0) && (
            <div>
              <Box  sx={{ display: 'flex' , pt: 15 , borderRadius: 1 , pl:5 , pb:5 }}>
                <Grid sx={{ width:{ xs:300 , md:1200 } , mt:7 , ml:4.5 }} container spacing={4}> 
                {props.filteredData.slice(0, 15).map((value) => {
                  return (
                    <Grid item xs={12} md={3}>
                      <Card 
                        sx={{ mr:2 , mb:1.5 , backgroundColor: '#90EE90' }}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate( '/card' , {state:{ id:value.id }} )
                        }}
                      >
                        <ImageListItem>
                          <img
                            src={`http://localhost:3002/files/${value.image}`}
                            alt={value.title}
                            loading="lazy"
                          />
                          <ImageListItemBar
                            title={value.title}
                            subtitle={`${value.price}$`}
                            position="below"
                            sx={{ pl:2 }}
                          />
                        </ImageListItem>
                      </Card>
                      <Button 
                        onClick={() => {
                        handleClick(value)
                        }}
                        sx={{ mr:2 , mb:1.5 , backgroundColor: '#90EE90' }}
                      >
                      اضافه به سبد خرید
                      </Button>
                    </Grid>
                  );
                })}
                </Grid>
              </Box>
            </div>
          )}
    </div>
  )
}
