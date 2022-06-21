import React from "react";
import Sidebar from "./components/Sidebar";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import pic from './img/bg.png'

const App = () => {
    return (
        <BrowserRouter>
        <div style={{backgroundImage:`url(${pic})`, padding:"10px", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <Sidebar />
        </div>
        </BrowserRouter>
    )
}

export default App;