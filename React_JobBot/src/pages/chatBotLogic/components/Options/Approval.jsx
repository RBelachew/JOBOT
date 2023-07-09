import React from "react";
import {useState,useEffect} from "react";

import "./Options.css";

const Approval = (props) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Yes");
  const [submitted,setSubmitted]=useState(false);

  useEffect(()=>{setOptions(props.node.getNextResponse().options)},[]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Y/N radio: ", selectedOption);
    // handle submission logic
    setSubmitted(true);
    props.actionProvider.handleApproval(props.node,selectedOption)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="listOptions">
        {options.map((opt,index) =>{
          return(
          <label key={index}>
            <input
            type="radio"
            value={opt}
            name="approval"
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

export default Approval;

