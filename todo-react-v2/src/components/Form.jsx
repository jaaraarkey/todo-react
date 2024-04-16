import React, { useState } from "react";
export function Form() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTask] = useState(["dance", "code", "don't forget to move"]);

  const clickHandler = () => {
    const newTasks = JSON.parse(JSON.stringify(tasks));
    // const newTasks = [...tasks];
    newTasks.push("new tasks");
    setTask(newTasks);
    console.log(newTasks);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type your text here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ fontSize: "2rem", padding: "0.5rem" }}
      />
      <br />
      <button onClick={clickHandler}>Click to add task!</button>
    </div>
  );
}
