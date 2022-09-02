import React, { useState, useEffect } from "react";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios({
      url: "/api/tasks",
    }).then((tasks) => {
      setTasks(tasks.data);
    });
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.description}</div>
      ))}
    </div>
  );
};

export default Tasks;
