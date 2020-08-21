import React from 'react';
import Layout from './components/Layout/Layout'
import GadgetMainPage from "./containers/GadgetsPage/GadgetsMain"
import Home from './components/Home';
import Sidebar from './Sidebar'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/Login/LoginButton'
import LogoutButton from './components/Login/LogoutButton'
import Profile from './components/Login/Profile'

import './App.css';



function App() {
  // const { isLoading } = useAuth0();

  // if (isLoading) return <div>Loading...</div>

  return (      
    <>
    {/* <>
    <LoginButton />
    <LogoutButton />
    <Profile />
  </> */}


            <div id="App">
        
      <Sidebar />
      </div>
    

      </>
  );
}

export default App;
