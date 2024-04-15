import React, { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={inputValue} // Value from state
        onChange={handleChange}
      />
      The typed value is {inputValue}
    </>
  );
};

export default Input;
