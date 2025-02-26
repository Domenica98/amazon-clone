import React from "react";
import Navbar from "./Components/Navbar"; //importo la nabar
import "./App.css"; //sarà per lo stile


function App(){
  return(
    <div className = "App">
      <Navbar /> { /* Qui mostriamo la Navbar, anche le graffe fanno parte del commento */ }
    </div>
  );
};

export default App;