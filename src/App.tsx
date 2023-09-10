import React, { useState } from "react";

import "./index.css";
import ToDoList, { TasksType } from "./ToDoList";
import { v1 } from "uuid";

export type typeValuesFilter = "all" | "complited" | "active";

function App() {
  const [tasks, setTasks] = useState<Array<TasksType>>([
    { id: v1(), title: "js", isDone: true },
    { id: v1(), title: "TS", isDone: false },
    { id: v1(), title: "Redax", isDone: false },
    { id: v1(), title: "React", isDone: false },
  ]);

  const [filter, setFilter] = useState<typeValuesFilter>("all");

  function changeFilter(value: typeValuesFilter) {
    setFilter(value);
  }

  let tasksForToDoList = tasks;
  if (filter === "active") {
    tasksForToDoList = tasks.filter((t) => t.isDone === false);
  } else if (filter === "complited") {
    tasksForToDoList = tasks.filter((t) => t.isDone === true);
  }

  function removeTask(id: string) {
    let result = tasks.filter((t) => t.id !== id);
    setTasks(result);
    console.log(result);
  }

  function addTask(title: string) {
    let newTask = {
      id: v1(),
      title: title,
      isDone: false,
    };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function changeStatus(TaskId: string, isDone: boolean) {
    let resaltTask = tasks.find((t) => t.id === TaskId);
    if (resaltTask) {
      resaltTask.isDone = !resaltTask.isDone;
    }
    console.log(resaltTask);
    setTasks([...tasks]);
  }

  return (
    <div className="conteiner">
      <ToDoList
        title="What to learn"
        tasks={tasksForToDoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeStatus={changeStatus}
      />
    </div>
  );
}

export default App;
