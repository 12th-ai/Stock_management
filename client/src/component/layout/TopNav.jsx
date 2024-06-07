import React, { useEffect, useState } from 'react';

import { NavLink,Link,Outlet,useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";


function TopNav() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:3000/api/auth/user')
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
          setImage(res.data.profile);
        } else {
          setAuth(false);
          navigate('/login');
        }
      })
      .catch(error => console.error(error));
  }, [navigate]);


  return (
    <div>
      {auth?
    
    <div className="topNav">
      
      <div className="nav-l">
        <h1>MONARCH</h1>
      </div>
      <div className="account">
     

      <><h1>Hello {name}</h1>

            <img src={`http://localhost:3000/uploads/${image}`} alt="Profile" />
 
             </>
      </div>

    </div>

:null 
      }
    </div>
  );
}

export default TopNav;
