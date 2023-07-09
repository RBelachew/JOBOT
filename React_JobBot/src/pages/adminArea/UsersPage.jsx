import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';

import ErrorMessages from "../chatBotLogic/components/Options/ErrorMessages"
import './UsersPage.css';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [isServerDown, setIsServerDown] = useState(false);

  //load the users list from server
  useEffect(() => {
    axios.post('/viewusers')
      .then(response => {
        if (response.data.success) {
          setUsers(response.data.users_list);
          setIsLoading(true);
        } else {
          console.log('Error fetching jobs:', response.data.message);
        }
      })
      .catch(error => {
        setIsServerDown(true)
        console.log('Error fetching jobs:', error.message);
      });
  }, []);

  const adminUsers = users.filter(user => user.admin&&(user.admin === 'Yes'));
  const nonAdminUsers = users.filter(user => !user.admin||(user.admin === 'No'));

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  //if clicked on user details go to user history page
  function handleHistory(user){
    var details={userName:user.user_name,password:user.password}
    navigate("/./history", {
      state: details,
    });
  }

  return (
    <div>
    <Typography variant='h4' align="center" m={2} fontFamily="Serif">Users</Typography>
    {!isServerDown?(
          (isLoading)?(
            <div>
            <Tabs value={selectedTab} onChange={handleTabChange} centered>
              <Tab label="Admin Users" />
              <Tab label="Non-Admin Users" />
            </Tabs>
      
            {/* if the first tab selected list admin users */}
            {selectedTab === 0 && (
              <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-2 wider-box">
                <ul className="w-50 d-flex flex-column justify-content-center align-items-center mt-2 wider-box">
                  {adminUsers.map(user => (
                    <li className="user-item" key={user.user_name}>
                      <p>{user.user_name}</p>
                      <p>{user.password}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
      
            {/* if the second tab selected list non-admin users */}
            {selectedTab === 1 && (
              <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-2 wider-box">
                <ul className="w-50 d-flex flex-column justify-content-center align-items-center mt-2 wider-box">
                  {nonAdminUsers.map(user => (
                    <li className="user-item" id="user-item" key={user.user_name} onClick={() => handleHistory(user)}>
                      <p>{user.user_name}</p>
                      <p>{user.password}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          ):(<div className="loading"><CircularProgress /></div>)
    ):(
      <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop: "2rem"}}> <ErrorMessages /></div>
      )}
    </div>
  );
}

export default UsersPage;

