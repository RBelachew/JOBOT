import React from "react";
import { useState, useEffect } from "react";

import JobCard from "./JobCard.jsx";

const filterObjectsById = (objects, selectedObjects) => {
  let filteredObjects = [];
  objects.map((obj) => {
    if (selectedObjects.includes(obj._id)) {
      filteredObjects.push(obj);
    }
  });
  return filteredObjects;
};

const DisplaySelectedJobs = (props) => {
  const [options, setOptions] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    var jobs = props.node.getSavedInDB()["displayed jobs"];
    var selectedJobs = props.node.getSavedInDB()["selected jobs"];
    const selectedJobsDetails = filterObjectsById(jobs, selectedJobs);
    setOptions(selectedJobsDetails);
  }, []);

  const onCardClick = (id) => {
    setSelectedJobId(selectedJobId === id ? null : id);
  };

  const buttonsMarkup = options.map(
    (job, index) => (
      <JobCard
        key={index}
        job={job}
        isSelected={job._id === selectedJobId}
        onCardClick={onCardClick}
      />
    ),
    []
  );

  return <div>{buttonsMarkup}</div>;
};

export default DisplaySelectedJobs;
