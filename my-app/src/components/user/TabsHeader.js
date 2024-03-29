import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Home from '../layout/user/Home';
import Category from '../layout/user/Category';
import SearchComponent from './SearchComponent';
import { useLocation } from 'react-router-dom';


export default function TabsHeader() {
  const data = useLocation();
  console.log(data.state.name);

  return (
    <div>
    <Toolbar disableGutters sx={{ backgroundColor: '#E0FFFF' }}>
    {(data.state.name.length === 0) 
    ? (
    <>
    {data.state.id === 0 ? <Home/> :""}
    {data.state.id === 1 ? <Category show={true} index={1}/> : ""}
    {data.state.id === 2 ? <Category show={true} index={2}/> : ""}
    {data.state.id === 3 ? <Category show={true} index={3}/> : ""}
    {data.state.id === 4 ? <Category show={true} index={4}/> : ""}
    {data.state.id === 5 ? <Category show={true} index={5}/> : ""}
    {data.state.id === 6 ? <Category show={true} index={6}/> : ""}
    {data.state.id === 7 ? <Category show={true} index={7}/> : ""}
    </>
    )
      : <SearchComponent filteredData={data.state.name}/>
    }
    </Toolbar>
    </div>
  )
}