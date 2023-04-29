import React from 'react';
import { useState , useRef } from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid , Pagination , TableBody , CircularProgress } from '@mui/material';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button, Card } from '@mui/material';
import { useFetch } from '../admin/UseFetch';
import { AddToBasket } from './AddToBasket';
import { useNavigate } from 'react-router-dom';


export default function DataOff() {
  const [activePage, setActivePage] = useState(1);
  const limit = useRef(4);
  const navigate = useNavigate();
  
  const { data, loading } = useFetch(
    `/products?off=true&_page=${activePage}&_limit=${limit.current}}`
  );

  console.log(data);
  
  const { handleClick  } = AddToBasket();

  return (
    <div>
      <Box sx={{ pt:{xs:3 , md:7} }}  width={{xs:370 , md:1000}}>
            <Box>
              <Grid sx={{ width:{ xs:300 , md:1200 } , mt:0 , ml:7 }} container spacing={4}> 
              {loading ? (
                <Box
                  sx={{
                    position: "absolute",
                    background: "#fafafa",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  {data.data.map((record) => (
                    <Grid item xs={12} md={3}>
                    <Card sx={{ mr:2 , mb:1.5 , backgroundColor: '#90EE90' }} 
                      onClick={(e) => {
                        e.preventDefault();
                        navigate( '/card' , {state:{ id:record.id }} )
                      }}
                    >
                      <ImageListItem>
                        <img
                          src={`http://localhost:3002/files/${record.image}`}
                          alt={record.title}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          title={record.title}
                          subtitle={`${record.price}$`}
                          position="below"
                          sx={{ pl:2 }}
                        />
                      </ImageListItem>
                    </Card>
                    <Button 
                      onClick={() => {
                        handleClick(record)
                      }}
                      sx={{ mr:2 , mb:1.5 , backgroundColor: '#90EE90' , color:"black"}}
                    >
                    افزودن به سبد خرید
                    </Button>
                  </Grid>
                  ))}
                </>
              )}
              </Grid>
            </Box>
            <Pagination
              sx={{ pt:5 , pb:3 , pl:{xs:22 , md:80}}}
              variant="outlined"
              defaultPage={1}
              page={activePage}
              count={Math.ceil(data?.headers["x-total-count"] / limit)}
              onChange={(_, page) => {
                setActivePage(page);
              }}
            />
      </Box>
    </div>
  )
}
