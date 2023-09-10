import React, { useState } from "react";
import { typeValuesFilter } from "./App";

export type TasksType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TasksType>;
  removeTask: (id: string) => void;
  changeFilter: (values: typeValuesFilter) => void;
  addTask: (title: string) => void;
  changeStatus: (TaskId: string, isDone: boolean) => void;
};

function ToDoList(props: PropsType) {
  const [title, setTitle] = useState("");

  function changeInputHandler() {
    if (title.trim() !== "") {
      props.addTask(title);
      setTitle("");
    }
  }

  return (
    <div className="wrapper">
      <h3>{props.title}</h3>
      <div>
        <input onChange={(e) => setTitle(e.target.value)} value={title} />
        <button onClick={changeInputHandler}>add</button>
      </div>
      {title === "" && <div>Поле обязательно для заполнения</div>}

      <ul>
        {props.tasks.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.isDone}
              onChange={(e) => props.changeStatus(t.id, e.target.checked)}
            />
            <span>{t.title}</span>
            <button
              onClick={() => {
                props.removeTask(t.id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          props.changeFilter("all");
        }}
      >
        {" "}
        All
      </button>
      <button
        onClick={() => {
          props.changeFilter("active");
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          props.changeFilter("complited");
        }}
      >
        Complited
      </button>
    </div>
  );
}

export default ToDoList;
