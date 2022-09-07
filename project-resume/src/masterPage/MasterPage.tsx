import React from "react";
import Home from "./routes/Home";
import Skills from "./routes/Skills";
import Dashboard from './routes/Dashboard';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


const MasterPage=()=>{
   
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Dashboard" element={<Dashboard/>}/>
                <Route path="/Skills" element={<Skills/>}/>
            </Routes>
        </BrowserRouter>
       
    );

        
}

export default MasterPage;