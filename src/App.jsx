import React, { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");
  const [newGreeting, setNewGreeting] = useState("");

  const handleChange = (event) => {
    setNewGreeting(event.target.value);
  };

  const updateGreeting = () => {
    setGreeting(newGreeting);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={handleChange} />
      </div>

      <div className="buttons">
        <button onClick={updateGreeting}>Update text</button>
      </div>
    </div>
  );
}

export default App;
