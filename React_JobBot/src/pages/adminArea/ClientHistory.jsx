import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import ConversationsPage from './ConversationsPage'
import OfferedJobs from './OfferedJobs'


function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index} id={index}>
      {value === index && <Typography component={'span'}>{children}</Typography>}
    </div>
  );
}

function ClientHistory() {
  const location = useLocation();
  const clientDetails = location.state;
  console.log(clientDetails);
  
  //all tabs which holds last chat details of the client
  function BasicTabs() {
    const [value, setValue] = React.useState(0);
      
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    //display 3 tabs: last chat content, offered jobs and selected jobs
    return (
      <>
      <Typography variant='h4' align="center" m={2} fontFamily="Serif">History of {clientDetails.userName}</Typography>
      <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Last Chat Content" />
      <Tab label="Last Offered Jobs" />
      <Tab label="Last Selected Jobs" />
      </Tabs>
      <TabPanel value={value} index={0}>
      <ConversationsPage propValue={clientDetails}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <OfferedJobs propValue={{"clientDetails":clientDetails,"jobs":"displayed"}}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OfferedJobs propValue={{"clientDetails":clientDetails,"jobs":"selected"}}/>
      </TabPanel>
      </>
    );
  }

  return (
    <div>
      <  BasicTabs/>
    </div>
  );
}

export default ClientHistory;
