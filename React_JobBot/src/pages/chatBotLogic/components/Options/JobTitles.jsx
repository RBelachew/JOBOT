import React from "react";
import {useState,useEffect} from "react";

import "./Options.css";

const JobTitles = (props) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submitted,setSubmitted]=useState(true);

  useEffect(
    ()=>{
        var selectedField=props.node.getSelected().field;
        setOptions(props.node.getNextResponse().options[0][selectedField])
    }
    ,[]);

  const handleOptionChange = (event) => {
    const option = event.target.value;
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const isFormValid = () => {
    return Object.values(selectedOptions).some((isChecked) => isChecked)&&submitted;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Options: ", selectedOptions);
    // handle submission logic
    setSubmitted(false);
    props.actionProvider.handleJobTitle(props.node,selectedOptions);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="listOptions">
        {options.map((opt,index) =>{
          return(
          <label key={index}>
            {/* <br /> */}
            <input
            className="checkbox"
            type="checkbox"
            value={opt}
            onChange={handleOptionChange} />
            {opt}
          </label>);
        },[])
        }
      </label>
      <br />
      <button type="submit" className="option-button" disabled={!isFormValid()}>Submit</button>
    </form>
  );
};

export default JobTitles;
