import React from "react";
import {useState,useEffect} from "react";

import "./Options.css";

const Areas = (props) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submitted,setSubmitted]=useState(true);


  useEffect(()=>{setOptions(props.node.getNextResponse().options)},[]);


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
    if(selectedOptions.length===3){
      props.actionProvider.handleArea(props.node,["All"]);
    }else{
      props.actionProvider.handleArea(props.node,selectedOptions);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="listOptions">
        {options.map((opt,index) =>{
          return(
          <label key={index}>
            <input
            type="checkbox"
            value={opt}
            onChange={handleOptionChange}/>
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

export default Areas;

