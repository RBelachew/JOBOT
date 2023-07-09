import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

import ErrorMessages from "../chatBotLogic/components/Options/ErrorMessages"

function ConversationsPage(props) {
  const clientDetails=props.propValue
  console.log(clientDetails);

  const [historyItem, setHistoryItem] = useState(null);
  const [result,setResult] = useState(false)
  const [isServerDown, setIsServerDown] = useState(false);


  useEffect(() => {
    fetchHistory();
  }, []);

  //fetch from server the content of history according to the client details
  const fetchHistory = () => {
    axios.post('/viewhistory', { clientDetails })
      .then(response => {
        setHistoryItem(response.data.content);
        setResult(true)
      })
      .catch(error => {
        setIsServerDown(true)
        console.error('Error fetching history:', error.message);
      });
  };

  //if finish fetching history from server display the results
  return (
    <div className="conversations-page">
      {!isServerDown?(
      (!result) ? (
        <div className="loading"><CircularProgress /></div>):(
      (historyItem&&historyItem.length > 0)?(
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div>
          {/* historyItem = [{bot:[..]},{user:[..]}] */}
          {/* go through each sender and display the content of the message */}
          {historyItem.map((messageObj, index) => {
            const sender = Object.keys(messageObj)[0];
            const messages = messageObj[sender];
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: sender === 'bot' ? 'flex-start' : 'flex-end',
                  marginBottom: '1rem',
                  marginTop: "2rem"
                }}
              >
                <div
                  style={{
                    background: sender === 'bot' ? '#f5f5f5' : '#007bff',
                    color: sender === 'bot' ? '#000' : '#fff',
                    borderRadius: sender === 'bot' ? '15px 15px 15px 5px' : '15px 15px 5px 15px',
                    padding: '10px',
                    maxWidth: '70%',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {/* display the messages of the sender */}
                  {messages&&messages.map((message, idx) => (
                    <p key={idx}>{message}</p>
                  ))}
                </div>
              </div>
            );
            })
          }
        </div>
      </div>):(<p style={{display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop: "2rem"}}>No history item found.</p>)
      )
      ):
      (
        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop: "2rem"}}> <ErrorMessages /></div>
      )
      }
    </div>
  );
}

export default ConversationsPage;
