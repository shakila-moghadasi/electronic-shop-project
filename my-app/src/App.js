import { Route , Routes } from 'react-router-dom';
import './App.css';
import Ordered from './components/layout/admin/Ordered';
import User from './components/layout/user/User';
import Home from './components/layout/user/Home';
import TabsHeader from './components/user/TabsHeader';
import CardCommodity from './components/layout/user/CardCommodity';
import Basketshop from './components/layout/user/Basketshop';
import Login from './components/layout/admin/Login';
import Management from './components/layout/admin/Management';
import Managementcommodity from './components/layout/admin/ManagementCommodity';
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
        <Route path='/' element={<Management/>}>
          <Route path='/commodity' element={<Managementcommodity/>}/>
        </Route>
        <Route path='/ordered' element={<Ordered/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
