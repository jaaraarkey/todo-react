import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form.jsx";

const App = () => {
  //   const [task, setTask] = useState("");
  //   const [tasks, setTasks] = useState([]);

  //   const handleChange = (event) => {
  //     console.log(setTask(event.target.value));
  //   };

  //   const addTask = () => {
  //     if (task.trim() !== "") {
  //       setTasks([...tasks, task]);
  //       setTask("");
  //     }
  //   };

  return (
    <>
      <h1 className="title">MY TODO LIST</h1>
      <Form />
      <p> List of todos: </p>
    </>
  );
};
export default App;
