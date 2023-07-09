import { Link } from 'react-router-dom';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { useUser } from "../../UserProvider"


export default function Home() {
    const { userType } = useUser()
    const clientDetails = userType.details
    console.log(clientDetails)
    
    //list the menu of client area with using mui designed icons
      return (
        <div style={{height: "92vh"}} className="w-100 d-flex flex-column justify-content-center align-items-center pb-5">
            <h1 style={{color: "#309CFF"}}>Welcome!</h1>
        <List dense={false} className="m-3">
          <ListItem>
            <IconButton component={Link} to="/startChat" state={clientDetails}>
              <ListItemIcon >
                <SmartToyOutlinedIcon color="primary" fontSize="large"/>
              </ListItemIcon>
            </IconButton>
            <ListItemText
              primary="Start Chat"
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
              primary="Self Job Search"
              secondary={false}
            />
          </ListItem>
    
          <ListItem>
            <IconButton component={Link} to="/details" state={clientDetails}>
              <ListItemIcon>
                <ManageAccountsOutlinedIcon  color="primary"  fontSize="large"/>
              </ListItemIcon>
            </IconButton>
            <ListItemText
              primary="User Details"
              secondary={false}
            />
          </ListItem>
    
          <ListItem>
            <IconButton component={Link} to="/logout" state={clientDetails}>
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
