import React from "react";
import {useState,useEffect} from "react";

import "./Options.css";

const JobTypes = (props) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Full time");
  const [submitted,setSubmitted]=useState(false);

  useEffect(()=>{setOptions(props.node.getNextResponse().options)},[]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle submission logic
    setSubmitted(true);
    let selectedJobType;
    if (selectedOption==="Full time"){
      selectedJobType="Full_time"
    }else{
      selectedJobType="Part_time"
    }
    props.actionProvider.handleJobType(props.node,[selectedJobType])
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="listOptions">
        {options.map((opt,index) =>{
          return(
          <label key={index}>
            {/* <br /> */}
            <input
            type="radio"
            value={opt}
            name="jobType"
            checked={selectedOption === opt}
            onChange={handleOptionChange} 
            />
            {opt}
          </label>);
        },[])
        }
      </label>
      <br />
      <button type="submit" className="option-button" disabled={submitted}>Submit</button>
    </form>);
};

export default JobTypes;

