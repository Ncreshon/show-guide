import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Results from "./Components/Results/Results";

function App() {
  const [shows, setShows] = useState([]);

  return (
    <div className="App">
      <NavBar setShows={setShows} shows={shows} />
      <Results shows={shows} />
     
    </div>
  );
}

export default App;
