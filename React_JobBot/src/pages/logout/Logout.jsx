import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = ({updateUsertype}) => {
  const [loggedOut, setLoggedOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    updateUsertype({})
    axios.post('/logout')
      .then(response => {
        if (response.data.success) {
          setLoggedOut(true);
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  if (loggedOut) {
    navigate("/.");
  }

  return (
    <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
    <button
      onClick={handleLogout}
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        background: '#1775ee',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        width:"20%",
      }}
    >
      Logout
    </button>
    </div>

  );
};

export default Logout;
