import React from 'react';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

import '../adminArea/UsersPage.css';
import { useUser } from "../../UserProvider.js"



function UserDetails() {
    const { userType } = useUser()
    const clientDetails = userType.details
    console.log(clientDetails)
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center mx-auto mt-5 pt-5">
      <ManageAccountsOutlinedIcon style={{fontSize: "100px"}} color="primary" />
      <li className="user-item w-25">
        <p className="user-name">user name: {clientDetails.userName}</p>
        <p className="user-password">password: {clientDetails.password}</p>
      </li>
    </div>
  );
}

export default UserDetails;
