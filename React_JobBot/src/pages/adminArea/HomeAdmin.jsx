import { Link } from 'react-router-dom';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PieChartIcon from '@mui/icons-material/PieChart';
import PeopleIcon from '@mui/icons-material/People';

import { useUser } from "../../UserProvider.js"


export default function HomeAdmin() {
    const { userType } = useUser()
    const adminDetails = userType.details
    console.log(adminDetails)

    const dense = false;
    //list the menu of admin area with using mui designed icons
      return (
        <div style={{height: "92vh"}} className="w-100 d-flex flex-column justify-content-center align-items-center pb-5">
            <h1 style={{color: "#309CFF"}}>Welcome Admin!</h1>
        <List dense={dense} className="m-3">
          <ListItem>
            <IconButton component={Link} to="/users">
              <ListItemIcon >
                <PeopleIcon color="primary" fontSize="large"/>
              </ListItemIcon>
            </IconButton>
            <ListItemText
              primary="Users"
              secondary={false}
            />
          </ListItem>
    
          <ListItem>
            <IconButton component={Link} to="/jobs">
              <ListItemIcon>
                <SearchOutlinedIcon  color="primary"  fontSize="large"/>
              </ListItemIcon>
            </IconButton>
            <ListItemText
              primary="Jobs"
              secondary={false}
            />
          </ListItem>

          <ListItem>
            <IconButton component={Link} to="/viewChatFlow">
              <ListItemIcon>
                <AccountTreeIcon  color="primary"  fontSize="large"/>
              </ListItemIcon>
            </IconButton>
            <ListItemText
              primary="Chat Flow"
              secondary={false}
            />
          </ListItem>

          <ListItem>
            <IconButton component={Link} to="/statistics">
              <ListItemIcon>
                <PieChartIcon  color="primary"  fontSize="large"/>
              </ListItemIcon>
            </IconButton>
            <ListItemText
              primary="Statistics"
              secondary={false}
            />
          </ListItem>
    
          <ListItem>
            <IconButton component={Link} to="/details" state={adminDetails}>
              <ListItemIcon>
                <ManageAccountsOutlinedIcon  color="primary"  fontSize="large"/>
              </ListItemIcon>
            </IconButton>
            <ListItemText
              primary="Admin Details"
              secondary={false}
            />
          </ListItem>
    
          <ListItem>
            <IconButton component={Link} to="/logout" state={adminDetails}>
              <ListItemIcon>
                <LogoutOutlinedIcon  color="primary"  fontSize="large"/>
              </ListItemIcon>
            </IconButton>
            <ListItemText
              primary="Logout"
              secondary={false}
            />
          </ListItem>
    
        </List>
        </div>
      );
    }
