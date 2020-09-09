import React from 'react';
import Sidebar from './Sidebar'
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import {Loader} from './styledComp/loader'
import ModalHook from './components/Gadgets/Products/Modal';




function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <><h1 style={{textAlign:"center"}}>Please wait while we load</h1><Loader/></>

  return (      
    <div id="App">        
      <Sidebar />
      <ModalHook>Hello</ModalHook>
      </div> 
  );
}

export default App;
