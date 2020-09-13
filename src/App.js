import React from 'react';
import Sidebar from './Sidebar'
// import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
// import {Loader} from './styledComp/loader'
import ModalHook from './components/Gadgets/Products/Modal';
import Wrapper from './wrapper/Wrapper'
import GlobalState from './components/Gadgets/Products/context/GlobalState'


function App() {


  // const { isLoading } = useAuth0();
  // if (isLoading) return <><h1 style={{textAlign:"center"}}>Please wait while we load</h1><Loader/></>


  return (     

    <GlobalState>
  <Wrapper>
    <div id="App">    
      <Sidebar />
      <ModalHook>Hello</ModalHook>
      </div>
      </Wrapper>
      </GlobalState>
  );
}

export default App;
