
import { useState } from 'react';
import './App.css';
import Allroutes from './Componants/Allroutes';
import DrawerSidebar from './Componants/LeftSideBar/DrawerSidebar';
import Navbar from './Componants/Navbar';
//import Allroutes from './Componants/Allroutes';
import {BrowserRouter as Router} from "react-router-dom";
//import { useState } from 'react';
function App() {
  const [toggleDrawerSidebar,setToggleDrawerSidebar] = useState({
    display:"none",

  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      setToggleDrawerSidebar({
        display:"flex"
      })
    }
    else{
      setToggleDrawerSidebar({
        display:"none"
      })
    }
  }
  return (
    <Router>
      <Navbar 
      toggleDrawer={toggleDrawer}
      />
      {
        <DrawerSidebar
        toggleDrawer={toggleDrawer} 
        toggleDrawerSidebar={toggleDrawerSidebar}
        
        />
      }
      <Allroutes />
    </Router>
  );
}

export default App;
