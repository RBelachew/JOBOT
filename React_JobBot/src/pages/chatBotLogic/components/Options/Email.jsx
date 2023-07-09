import React from "react";
import {useState} from "react";

import "./Options.css"
const Email = (props) => {
  const [email, setEmail] = useState("");
  const [submitted,setSubmitted]=useState(false);

  const updateEmail = (event) => {
    event.preventDefault();
    // update the input of user into email state
    setEmail(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle submission logic
    setSubmitted(true);
    props.actionProvider.handleEmail(props.node,email);
    };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="email" id="email" onChange={updateEmail}></input>
      </label>
      <button type="submit" className="option-button" disabled={submitted}>Send to email</button>
    </form>);
};

export default Email;