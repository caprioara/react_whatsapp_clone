import React from "react"
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    // BEM naming convention
    <div className="app">
     {/* <h1>Lets build a WhatsApp clone!</h1> */}

     <div className="app__body">
       <Sidebar></Sidebar>
       <Chat />
       {/* Chat */}
     </div>
    </div>
  );
}

export default App;
