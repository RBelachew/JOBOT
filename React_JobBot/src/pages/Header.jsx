import { Link, useNavigate } from 'react-router-dom';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import JobotLogoPNG from "./JOBOT.png";
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function Header({userType}) {
  const navigate = useNavigate()
  return (
    <div className="d-flex justify-content-between align-items-center px-5" style={{backgroundColor:"#59698b",height:"8vh"}}>
      {/* if logo of JOBOT is clicked go to home page */}
      <div>
        <Button style={{width:"45%", height: "8vh"}} onClick={() => {
          if (!userType || Object.keys(userType).length === 0) {
            navigate("/")
          } else {
            userType.type === "admin" ?  navigate("/homePageAdmin") :  navigate("/homePage")
          }
        }}>
        <img src={JobotLogoPNG} style={{width:"100%"}}
         />
         </Button>
      </div>
      <div className="d-flex align-items-center">
        {/* if logo of home is clicked go to home page */}
       <ListItem>
            <IconButton onClick={() => {
                if (!userType || Object.keys(userType).length === 0) {
                  navigate("/")
                } else {
                  userType.type === "admin" ?  navigate("/homePageAdmin") :  navigate("/homePage")
                }
            }}>
              <ListItemIcon>
                <HomeIcon color="primary" fontSize="large"/>
              </ListItemIcon>
            </IconButton>
            <ListItemText
              primary={false}
              secondary={false}
            />
        </ListItem>
        {/* if logo of info is clicked go to about page  */}
        <ListItem>
            <IconButton component={Link} to="/about">
              <ListItemIcon>
                <InfoIcon color="primary" fontSize="large"/>
              </ListItemIcon>
            </IconButton>
            <ListItemText
              primary={false}
              secondary={false}
            />
        </ListItem>
      </div>
    </div>
  );
}
