import React from "react";
import {useState} from "react";

import "./Options.css"

const JobTitleTyping = (props) => {
  const [jobTitle, setJobTitle] = useState("");
  const [submitted,setSubmitted]=useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle submission logic
    setSubmitted(true);
    props.actionProvider.handleJobTitleTyping(props.node, jobTitle);
    };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" className="jobTitleTyping" onChange={(e) => setJobTitle(e.target.value)}></input>
      </label>
      <button type="submit" className="option-button" disabled={submitted}>Submit</button>
    </form>);
};

export default JobTitleTyping;