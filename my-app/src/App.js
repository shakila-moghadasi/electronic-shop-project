import { Route , Routes } from 'react-router-dom';
import './App.css';
import User from './components/layout/user/User';
import Home from './components/layout/user/Home';
import TabsHeader from './components/user/TabsHeader';
import CardCommodity from './components/layout/user/CardCommodity';
import Basketshop from './components/layout/user/Basketshop';
import Login from './components/layout/admin/Login';
import Management from './components/layout/admin/Management';
import Formshop from './components/layout/user/Formshop';


function App() {

  
  return (
    <div>
      <Routes>
        <Route path='/' element={<User/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/tab' element={<TabsHeader/>}/>
          <Route path='/card' element={<CardCommodity/>}/>
          <Route path='/shop' element={<Basketshop/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/form' element={<Formshop/>}/>
        <Route path='/Management' element={<Management/>}/>
      </Routes>
    </div>
  );
}

export default App;
