import React from "react";
import {useState,useEffect} from "react";

import "./Options.css";

const DisplayEmail = (props) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submitted,setSubmitted]=useState(true);

  useEffect(
    ()=>{
      setOptions(props.node.getNextResponse().options)
    }
    ,[]);//maybe props.node_if_options>0

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
    console.log("Selected Options1: ", selectedOptions);
    // handle submission logic
    setSubmitted(false);
    if(selectedOptions.includes("Just keep going")){
      props.actionProvider.handleDisplayEmail(props.node,["Just keep going"]);
    }else{
      props.actionProvider.handleDisplayEmail(props.node,selectedOptions);
    }
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
            onChange={handleOptionChange}
            disabled={(opt!=="Just keep going")&&selectedOptions.includes("Just keep going")} />
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

export default DisplayEmail;




