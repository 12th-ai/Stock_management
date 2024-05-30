// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './component/Auth/Login';
import Register from './component/Auth/Register'; 
import Dashboard from './Dashboard';
import Data_summary from './component/layout/Data_summary';

import Mainstockin from './component/Pages/stock_in/Mainstockin';
import AddStockIn from './component/Pages/stock_in/AddStockIn';
// import ReadStockIn from './component/Pages/stock_in/ReadstockIn';
import './Style/App.css'
import ReadStockIn from './component/Pages/stock_in/ReadstockIn';
import Mainstockout from './component/Pages/stockout/Mainstockout';
import ReadStockout from './component/Pages/stockout/Readstockout';
import AddStockout from './component/Pages/stockout/AddStockout';
import Settings from './component/Auth/Setting';
// import Updateproduct from './component/Pages/product/Updateproduct';
import UpdateStockIn from './component/Pages/stock_in/UpdateStockIn';
import UpdateStockout from './component/Pages/stockout/UpdateStockout';


const App = () => {
  return (

    <BrowserRouter>
    <Routes>
    <Route path='/register' element={<Register />} />
     <Route path='/login' element={<Login />} />
      <Route path='/' element={<Dashboard />} >
    
        <Route index element={<Data_summary />} />
        <Route path='stockin' element={<Mainstockin />}>
          <Route index element={<ReadStockIn />} />
          <Route path='addstockin' element={<AddStockIn />} />
          <Route path='updatestockin' element={<UpdateStockIn />} />
        </Route> 
         <Route path='stockout' element={<Mainstockout />}>
           <Route index element={<ReadStockout />} />
          <Route path='addstockout' element={<AddStockout />} />
          <Route path='updatestockout' element={<UpdateStockout />} />
        </Route> 
    <Route path='setting' element={<Settings />} />
      </Route>

    </Routes>

  </BrowserRouter>
  )
};

export default App;
