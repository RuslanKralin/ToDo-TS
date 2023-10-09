import React, { useState } from "react";
import { FilterValues, TaskType } from "./App";
import "./index.css";

type PropsType = {
  id: string;
  title: string;
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValues, listId: string) => void;
  filter: FilterValues;
  addTask: (title: string) => void;
  changeStatus: (id: string) => void;
};

function ToDoList(props: PropsType) {
  const [taskTitle, setTaskTitle] = useState("");
  const [error, setError] = useState("");

  function submitTaskTitle() {
    if (
      taskTitle &&
      taskTitle.trim().length !== 0 &&
      taskTitle.trim().length < 5
    ) {
      const trimedTitle = taskTitle.trim();
      setError("");
      props.addTask(trimedTitle);
      props.changeFilter("active", props.id);
      setTaskTitle("");
    } else if (taskTitle.trim().length === 0) {
      setError("пустое поле");
    } else if (taskTitle.trim().length > 5) {
      setError("больше 5");
    }
  }

  return (
    <div className="conteiner">
      <h2 className="title">{props.title}</h2>

      <div className="input">
        <input
          type="text"
          onChange={(e) => setTaskTitle(e.target.value)}
          value={taskTitle}
          // onKeyDown={(e) => console.log(e.key)}
          onKeyDown={(e) => (e.key === "Enter" ? submitTaskTitle() : null)}
        />
        <button onClick={() => submitTaskTitle()}>ADD</button>
      </div>
      {error && <div className="error">{error}</div>}
      <ul className="tasks-list">
        {props.tasks.map((t) => (
          <li className="task" key={t.id}>
            <input
              type="checkbox"
              checked={t.checked}
              onClick={() => props.changeStatus(t.id)}
            />
            <p className={t.checked === true ? "task-done" : ""}>{t.value}</p>
            <button onClick={() => props.removeTask(t.id)}>delete</button>
          </li>
        ))}
      </ul>
      <div className="btn-group">
        <button
          onClick={() => props.changeFilter("all", props.id)}
          className={props.filter === "all" ? "btn-active" : ""}
        >
          All
        </button>
        <button
          onClick={() => props.changeFilter("active", props.id)}
          className={props.filter === "active" ? "btn-active" : ""}
        >
          Active
        </button>
        <button
          onClick={() => props.changeFilter("completed", props.id)}
          className={props.filter === "completed" ? "btn-active" : ""}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default ToDoList;

// import React, { useState } from "react";
// import { typeValuesFilter } from "./App";
// import "./index.css";

// export type TasksType = {
//   id: string;
//   title: string;
//   isDone: boolean;
// };

// type PropsType = {
//   title: string;
//   tasks: Array<TasksType>;
//   removeTask: (id: string, listId: string) => void;
//   changeFilter: (values: typeValuesFilter, listId: string) => void;
//   addTask: (title: string) => void;
//   changeStatus: (TaskId: string, isDone: boolean) => void;
//   filter: typeValuesFilter;
//   id: string;
// };

// function ToDoList(props: PropsType) {
//   const [title, setTitle] = useState("");
//   const [error, setError] = useState<string>("");

//   function submitInputHandler(isDone: boolean) {
//     if (title.trim() !== "" && title.trim().length < 10) {
//       props.addTask(title);
//       props.changeFilter("all", props.id);
//       setTitle("");
//       setError("");
//     } else {
//       if (title.trim().length > 10) {
//         setError("больше 10!!!");
//       } else {
//         setError("Пустое поле");
//       }
//     }
//   }

//   return (
//     <div className="wrapper">
//       <h3>{props.title}</h3>
//       <div>
//         <input onChange={(e) => setTitle(e.target.value)} value={title} />
//         <button onClick={() => submitInputHandler(false)}>add</button>
//       </div>
//       {error && <div>{error}</div>}

//       <ul>
//         {props.tasks.map((t) => (
//           <li key={t.id} className={t.isDone ? "task-done" : ""}>
//             <input
//               type="checkbox"
//               checked={t.isDone}
//               onChange={(e) => props.changeStatus(t.id, e.target.checked)}
//             />
//             <span>{t.title}</span>
//             <button
//               onClick={() => {
//                 props.removeTask(t.id, props.id);
//                 console.log(t.id, props.id);
//               }}
//             >
//               x
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={() => {
//           props.changeFilter("all", props.id);
//         }}
//         className={props.filter === "all" ? "btn-active" : ""}
//       >
//         {" "}
//         All
//       </button>
//       <button
//         onClick={() => {
//           props.changeFilter("active", props.id);
//         }}
//         className={props.filter === "active" ? "btn-active" : ""}
//       >
//         Active
//       </button>
//       <button
//         onClick={() => {
//           props.changeFilter("complited", props.id);
//         }}
//         className={props.filter === "complited" ? "btn-active" : ""}
//       >
//         Complited
//       </button>
//     </div>
//   );
// }

// export default ToDoList;
