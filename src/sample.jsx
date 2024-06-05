import React, { useState } from "react";
import "./App.css";

function App() {
  const [Greeting, setGreeting] = useState("Greeting Message");
  const handleChange = (event) => {
    setGreeting(event.target.value);
  };
  return (
    <div className="App">
      <div className="greeting-container">{Greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={handleChange} />
      </div>

      <div className="buttons">
        <button>Update text</button>
      </div>
    </div>
  );
}

export default App;
