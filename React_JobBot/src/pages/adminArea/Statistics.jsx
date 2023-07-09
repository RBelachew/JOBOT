import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';

import "./statistics.css"
import ErrorMessages from "../chatBotLogic/components/Options/ErrorMessages"


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    ,ArcElement
);


function parseStatisticsData(res){
    let labels = Object.keys(res["stat"])
    let values = Object.values(res["stat"])
    let statName=res["statName"]
    if(res["statName"]==="job Types"){
      statName="Job Types"
    }else if(res["statName"]==="experience level"){
      statName="Experience Levels"
    }else if(res["statName"]==="field"){
      statName="Fields"
    }else if(res["statName"]==="areas"){
      statName="Areas"
    }
    console.log({"statName":statName,"stats":{"labels":labels,"values":values}})
    return {"statName":statName,"stats":{"labels":labels,"values":values}}
}

function parseGeneralData(res){
    console.log(res["stat"])
    let labels = Object.keys(res["stat"])
    let values = Object.values(res["stat"])
    console.log("values",values)    
    var list=[]
    for (let i = 0; i < labels.length; i++) {
        list=list.concat(parseStatisticsData({ "statName":labels[i], "stat": values[i] }));
    }
    return list
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index} id={index}>
      {value === index && <Typography component={'span'}>{children}</Typography>}
    </div>
  );
}

const Statistics = () => {
    const [generalStats,setGeneralStats]=useState({})
    const [list, setList] = useState([]);
    const [feebackDataPie, setFeebackDataPie] = useState({});
    const [isPie, setIsPie] = useState(false);
    const [isClicked,setIsClicked]=useState(false)
    const [isServerDown, setIsServerDown] = useState(false);

    useEffect( ()=>{
      //fetch the statistics from server
         fetchStatistics("view_general_stats")
         fetchStatistics("view_feedback")
    },[]);

    // displaying the general and feedbacks pies
    function BasicTabs() {
        const [value, setValue] = React.useState(0);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
        return (
          <>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Genral statistics" />
              <Tab label="feedbacks" />
            </Tabs>
          </div>
            {/* if the general pies exist display them */}
            <TabPanel value={value} index={0}>
            {(isPie)?(<div className='alldata'>
              <div className='wrapper2 d-flex justify-content-center align-items-center'>
                  <button className="update-button" onClick={handleButtonClick} disabled={isClicked}>Update Statistics</button>
                  <p className="date">{generalStats["update date"]?"date: "+generalStats["update date"]:""}</p>
                  <p className="number">{generalStats["users number"]?"users number: "+generalStats["users number"]:""}</p>
                  <br/>
              </div>
                  <div className='wrapper'>
                  {list.map((opt,index) =>{
                    return(
                        <div key={index}>
                            {opt["statName"]+":"}
                            <br/>
                            <Pie data={getPieData(opt)} />
                            <br/>
                        </div>
                    );
                    },[])
                  } 
                  </div>
            </div>):<div className="loading"><CircularProgress /></div>}
            </TabPanel>

            {/* if the feedback pie exist display it*/}
            <TabPanel value={value} index={1}>
            {(isPie)?(
                <div className="feedbacPie">
                <p className='d-flex justify-content-center align-items-center'>Why don't you want offers anymore?</p>
                <Pie data={feebackDataPie} />
                </div>
            ):("")}
            </TabPanel>
          </>
        );
    }

    function fetchStatistics(statName){
        axios.post("/getStatistics", {
          goal: statName
        }, {
          headers: {
          'Content-type': 'application/json; charset=UTF-8' } 
        })
        .then((response) => {
          if (response.data.success) {
            console.log("Server returned statistics:", response.data.message);
            const res=response.data.message
            if(statName==="view_feedback"){
                setFeebackDataPie(getPieData(parseStatisticsData(res)))
                setIsPie(true)
            }else if(statName==="view_general_stats"||statName==="calculate_general_stats"){
                setGeneralStats(res)
                setList(parseGeneralData(res))
                setIsPie(true)
            }
          } else {
            console.log("Server did not return statistics: ", response.data.message);
          }
        })
        .catch((err) => {
          setIsServerDown(true)
          console.log("Error getting statistics: ", err.message);
        });
    }

    // enter the statistics data into the pie template
    function getPieData(results){
      const dataPie = {
          labels: results["stats"]["labels"],
          datasets: [
          {
              label: results["statName"],
              data: results["stats"]["values"],
              backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
          },
          ],
      }
      return dataPie;
    }

    const handleButtonClick = () => {
        fetchStatistics("calculate_general_stats")
        setIsPie(false)
        setIsClicked(true)
    };

    return (
    <div>
      <Typography variant='h4' align="center" m={2} fontFamily="Serif">Statistics</Typography>
      <p className="sentence">The statistics here refer to the total number of <strong>chats</strong> made with JOBOT by the website's users</p>
      {!isServerDown?(<  BasicTabs/>):(
        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop: "2rem"}}> <ErrorMessages /></div> )}
    </div>
  );
};

export default Statistics;

