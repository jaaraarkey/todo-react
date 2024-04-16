/* import React, { useState } from "react";
import "./App.css";

// let nextId = 0;
function App() {
  const [task, setTask] = useState([]);

  const submitTask = (e) => {
    e.preventDefault();
    setTask([...task, e.target[0].value]);
  };

  return (
    <>
      <h1>My todo list</h1>
      <form onSubmit={(e) => submitTask(e)} action="">
        <input type="text" />
        <button>Add Task!</button>
      </form>
      <ul>
        {task.map((myTask, index) => (
          <li key={index}>
            <input type="checkbox" />
            {myTask}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
 */
import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState(""); // State for the input field
  const [tasks, setTasks] = useState([]); // State for the list of tasks

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== "") {
      // Only add non-empty tasks
      setTasks([...tasks, task]);
      setTask(""); // Clear the input field after adding the task
    }
  };

  return (
    <>
      <h1 className="title" style={{}}>
        My todo list
      </h1>
      <p>todos:</p>
      <input type="text" value={task} onChange={handleChange} />
      <button
        onClick={addTask}
        style={{
          margin: "0 1rem",
        }}
      >
        {" "}
        Add task!{" "}
      </button>
      <ul>
        {tasks.map((taskItem, index) => (
          <li key={index}>
            <input type="checkbox" />
            {taskItem}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
