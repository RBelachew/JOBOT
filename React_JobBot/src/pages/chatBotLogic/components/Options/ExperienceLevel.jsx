import React from "react";
import {useState,useEffect} from "react";

import "./Options.css";

const ExperienceLevel = (props) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Intern");
  const [submitted,setSubmitted]=useState(false);

  useEffect(()=>{setOptions(props.node.getNextResponse().options)},[]);//maybe props.node_if_options>0

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle submission logic
    setSubmitted(true);
    props.actionProvider.handleExperienceLevel(props.node,[selectedOption]);
    
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
            name="experience"
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

export default ExperienceLevel;
