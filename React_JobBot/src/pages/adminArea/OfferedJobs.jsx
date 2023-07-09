import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaunchIcon from '@mui/icons-material/Launch';
import CircularProgress from '@mui/material/CircularProgress';
import starImage from './star.avif';

import {CardsTable} from "./CardsTable.jsx"
import ErrorMessages from "../chatBotLogic/components/Options/ErrorMessages"
import './JobsPage.css';



function OfferedJobs(props) {
  const state=props.propValue
  const clientDetails = state.clientDetails;
  console.log(clientDetails);

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isServerDown, setIsServerDown] = useState(false);

  useEffect(() => {
    fetchjobs();
  }, []);

  //fetch the displayed or selecteded jobs from server
  const fetchjobs = () => {
    if(state.jobs=="displayed"){
      axios.post('/offeredjobs', { clientDetails })
      .then(response => {
        setJobs(response.data.jobs);
        setIsLoading(true)
      })
      .catch(error => {
        setIsServerDown(true)
        console.error('Error fetching jobs:', error.message);
      });
    }else{
      axios.post('/selectededjobs', { clientDetails })
      .then(response => {
        setJobs(response.data.jobs);
        setIsLoading(true)
      })
      .catch(error => {
        setIsServerDown(true)
        console.error('Error fetching jobs:', error.message);
      });
    }

  };

  //return the hidden job details
  function collapsed(job){
    return (<div style={{textAlign:"center"}} >
    {job.rating&&<p className="job-rating"><span><img className="star" src={starImage} alt="Star" /></span> {job.rating}</p>}
    {job.date&&<p className="job-date"><AccessTimeIcon color="primary" fontSize=""/>{"  "+job.date}</p>}
    {job.link&&<p className="job-link">
      <a href={job.link} target="_blank" rel="noopener noreferrer">
        <LaunchIcon color="primary"/>
        {"     "+`${job.link.slice(0, 30)}...`}
      </a>
    </p>}
    <p className="job-description" style={{margin: "0 2rem 2rem"}}>{job.description}</p>
    </div>)
  }

  //return all details of job
  const dataAsCards = jobs.map((job, index) => {
    return {
      content: <div style={{textAlign:"center"}}>
                    <h2 className="job-title">{job.job}</h2>
                    <p>{job.company}</p>
                    <p className="job-location">{job.city}</p></div>,
      collapsableContent: collapsed(job)
    }
  })

  return (
    <div>
      {!isServerDown?(
          (!isLoading) ? (
            <div className="loading"><CircularProgress /></div>
          ) : (
            <div>
              {jobs&&jobs.length > 0 ? (
                <div>
                <CardsTable data={dataAsCards} />
                </div>
              ) : (
                <p style={{display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop: "2rem"}}>No jobs found.</p>
              )}
            </div>
          )
      ):(<div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop: "2rem"}}> <ErrorMessages /></div>)}
    </div>
  );
}

export default OfferedJobs;

