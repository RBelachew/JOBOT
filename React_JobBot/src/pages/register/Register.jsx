import React from "react";
import { useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import ErrorMessages from "../chatBotLogic/components/Options/ErrorMessages"


export default function Register() {
  const [isServerDown, setIsServerDown] = useState(false)

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/.");
  };

  const RegisterAccount = () => {
    setIsServerDown(false)
    var userName = document.getElementById("RegisterUserName").value;
    var Password = document.getElementById("RegisterPassword").value;
    
    // Envoi de la demande POST à votre serveur Flask
    axios.post("/register", {
      user_name: userName,
      password: Password
    }, {
      headers: {
      'Content-type': 'application/json; charset=UTF-8' } 
    })
      .then((response) => {
        if (response.data.success) {
          document.getElementById("registersuccess").innerHTML = response.data.message;
          setTimeout(() => {
            navigate("/.", { state: { successMessage: response.data.message } });
          }, 2500);
        } else {
          document.getElementById("registerfail").innerHTML = response.data.message;
        }
      })
      .catch((err) => {
        setIsServerDown(true)
        console.log(err.message);
      });
  };

  return (
    <div 
      style={{
        height: "100vh",
        backgroundColor: "#F1F6F9",
        color: "#212A3E"
      }}
      className="w-100 d-flex flex-column align-items-center justify-content-center pb-5">
      <div className="w-50 d-flex flex-column align-items-center ">
        <h1 style={{color: "#309CFF"}} className="display-1 m-0">JOBOT</h1>
        <h2 style={{color: "#309CFF"}} className="m-0">Register</h2>
        <p className="mt-3 mb-4">With JOBOT you can find your dream job in seconds!</p>
      </div>
      <div 
        style={{
          backgroundColor: "#309CFF",
          color: "#212A3E",
          width: "35%",
          borderRadius: "20px",
          height:"35%"
        }}
        className="d-flex flex-column align-items-center p-4">
        <div className="w-100 d-flex flex-column align-items-center"> 
        <TextField
          sx={{
            backgroundColor: "#F1F6F9",
            borderRadius: "5px",
          }}
          className="w-100"
          label="Username"
          type="text"
          id="RegisterUserName"
        />
          <TextField
          sx={{
            backgroundColor: "#F1F6F9",
            borderRadius: "5px",
          }}
          className="mt-2 w-100"
          label="Password"
          type="password"
          id="RegisterPassword"
        />
        </div>
        <div className="w-100 d-flex flex-row justify-content-between mt-4 ">
        <Button 
        sx={{
          backgroundColor: "#8AFA63",
          width: "50%"
        }}
        className="mx-2" variant="contained"  onClick={RegisterAccount}>Sign up</Button>
        <Button 
         sx={{
          backgroundColor: "#8AFA63",
          width: "50%"
        }}
        className="mx-2" variant="contained" onClick={routeChange}>Log into account</Button>
        </div>
      </div>
      <br/>
      <div id="registerfail"></div>
      <div id="registersuccess"></div>
      {isServerDown ?
        <ErrorMessages /> : null  
      }
    </div>
  );
}



