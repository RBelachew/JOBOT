import React from "react";
import {useEffect} from "react"
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import dec_tree from "./getFlowText.js"
import { useUser } from "../../UserProvider.js"
import "./startChat.css";

function StartChat() {
  const { userType } = useUser()
  const clientDetails = userType.details
  console.log(clientDetails)

  dec_tree.setRegistrationDetails(clientDetails)

  useEffect(()=> {
    dec_tree.intialHead()
    dec_tree.setRegistrationDetails(clientDetails)
  }, [])

  const validator = (input) => {
    if((dec_tree.getIsFeedback()===1)||(dec_tree.getIsRequirements()===1)){
      if(input.length > 0){
        return true
      }
      return false;
    }
    return false;
  }

  return (
    <>
    <div className="chatWindow">
      <div style={{ maxWidth: "800px" }}>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        validator={validator}
      />
      </div>
    </div>
    </>
  );
}

export default StartChat;

