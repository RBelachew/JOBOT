import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import StartChat from "./pages/chatBotLogic/StartChat.jsx"
import ViewChatFlow from "./pages/adminArea/viewChatFlow.jsx";
import HomeClient from "./pages/clientArea/HomeClient.jsx";
import HomeAdmin from "./pages/adminArea/HomeAdmin.jsx";
import JobsPage from "./pages/adminArea/JobsPage.jsx";
import UsersPage from "./pages/adminArea/UsersPage.jsx";
import Logout from "./pages/logout/Logout.jsx";
import UserDetails from "./pages/clientArea/UserDetails.jsx";
import ClientHistory from "./pages/adminArea/ClientHistory.jsx";
import Statistics from "./pages/adminArea/Statistics.jsx";
import ConversationsPage from "./pages/adminArea/ConversationsPage.jsx";
import OfferedJobs from "./pages/adminArea/OfferedJobs.jsx";
import About from "./pages/clientArea/About.jsx";
import Header from "./pages/Header.jsx";
import { UserProvider } from "./UserProvider.js";
import { useUser } from "./UserProvider.js"
import ProtectedRoutes from "./ProtectedRoutes.jsx"


function Main() {
  const { userType, updateUsertype} = useUser();
  
  return (
    <div className="d-flex flex-column">
    <Header userType={userType}/>
    <Routes>
      <Route path="/" element={<Login updateUsertype={updateUsertype}/>} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes updateUsertype={updateUsertype}/>}>
        <Route path="/startChat" element={<StartChat />}/>
        <Route path="/viewChatFlow" element={<ViewChatFlow />}/>
        <Route path="/homePage" element={<HomeClient />}/>
        <Route path="/homePageAdmin" element={<HomeAdmin />}/>
        <Route path="/jobs" element={<JobsPage />}/>
        <Route path="/users" element={<UsersPage />}/>
        <Route path="/logout" element={<Logout updateUsertype={updateUsertype}/>}/>
        <Route path="/details" element={<UserDetails />}/>
        <Route path="/history" element={<ClientHistory />}/>
        <Route path="/statistics" element={<Statistics />}/>
        <Route path="/conversations" element={<ConversationsPage />}/>
        <Route path="/offeredJobs" element={<OfferedJobs />}/>
        <Route path="/about" element={<About />}/>
      </Route>
    </Routes>
    </div>
  )
}


function App() {
  return (
    <UserProvider>
       <Main/>
    </UserProvider>
  );
}

export default App;
