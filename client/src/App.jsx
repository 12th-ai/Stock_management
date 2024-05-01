// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import Dashboard from './component/layouts/Dashboard';
import Update_User from './component/Pages/users/Update_User';
import Read_User from './component/Pages/users/Read_User';
import './Style/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} >
        <Route path="update" element={<Update_User />} />
          <Route path="read" element={<Read_User />} />
          </Route>
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
