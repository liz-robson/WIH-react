import "./App.css";
import PairingTable from "./PairingTable";
import RefreshBtn from "./RefreshBtn";
import SaveBtn from "./SaveBtn";
import React, { useState, useEffect } from "react";

function App() {
  const [pairings, setPairings] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/pairing")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPairings(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      {pairings && <PairingTable pairings={pairings.data} />}
      <RefreshBtn />
      <SaveBtn />
    </div>
  );
}

export default App;
