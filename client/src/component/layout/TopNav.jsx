import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../styles/TopNav.css';  // Assuming you have a separate CSS file for styling

function TopNav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/user', { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error.response ? error.response.data.message : error.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="topNav">
      <div className="nav-l">
        <h1>MONARCH</h1>
      </div>
      <div className="account">
        {user ? (
          <>
            <img src={user.profilePicture} alt="Profile" title='profile' />
            <span>Welcome, {user.user_name}</span>
          </>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
}

export default TopNav;
