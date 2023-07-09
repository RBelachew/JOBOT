import React from "react";
import {useState,useEffect} from "react";

import "./Options.css";

const AccuracyLevels = (props) => {
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
    console.log("Selected Options in accu: ", selectedOptions);
    // handle submission logic
    setSubmitted(false);
    if(selectedOptions.includes("Other")){
      //set the accuracy node
      props.node.setAccuracyNode({...props.node.getNextResponse()})
      //set in history list
      props.node.setHistoryChat([...props.node.getHistoryChat(),{user:["Other"]}])
      //call handler
      props.actionProvider.handleAccuracyLevel(props.node,["Other"]);
    }else{
      //set the accuracy node and options
      props.node.setAccuracyOptions(selectedOptions)
      props.node.setAccuracyNode({...props.node.getNextResponse()})
      //set in history list
      props.node.setHistoryChat([...props.node.getHistoryChat(),{user:selectedOptions}])
      //call handler
      props.actionProvider.handleAccuracyLevel(props.node,selectedOptions);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="listOptions">
        {options.map((opt,index) =>{
          return(
          <label key={index}>
            <input
            className="checkbox"
            type="checkbox"
            value={opt}
            onChange={handleOptionChange}
            disabled={(opt!=="Other")&&selectedOptions.includes("Other")} />
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

export default AccuracyLevels;
