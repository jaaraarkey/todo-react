import React, { useState } from "react";

const Input = () => {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={task} // Value from state
        onChange={handleChange}
      />
      The typed value is {task}
    </>
  );
};

export default Input;
