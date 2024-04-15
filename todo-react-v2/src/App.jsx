import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const displayValue = () => {
    console.log(inputValue);
  };

  return (
    <>
      <h1 className="title">My todo list</h1>
      <p>todo`s:</p>
      <input
        type="text"
        value={inputValue} // Value from state
        onChange={handleChange}
      />
      <button onClick={() => displayValue()}> Add task! </button>
      {tasks.map((task, index) => {
        return (
          <>
            <li>
              <input type="checkbox" key={index} />
              {task}
            </li>
          </>
        );
      })}
    </>
  );
}

export default App;
