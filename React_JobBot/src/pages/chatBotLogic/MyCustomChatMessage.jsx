import React from "react";
import botImage from './bot.png';

import "./startChat.css";

const MyCustomChatMessage = (props) => {
    return (
        <img className="botImage" src={botImage} alt="bot"></img>
    );
};

export default MyCustomChatMessage;

