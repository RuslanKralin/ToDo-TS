import React, { useState } from "react";
import { FilterValues, TaskType } from "./App";
import "./index.css";

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValues) => void;
  filter: FilterValues;
  addTask: (title: string) => void;
};

function ToDoList(props: PropsType) {
  const [taskTitle, setTaskTitle] = useState("");
  function submitTaskTitle() {
    props.addTask(taskTitle);
    setTaskTitle("");
  }

  return (
    <>
      <h2>{props.title}</h2>

      <div>
        <input
          type="text"
          onChange={(e) => setTaskTitle(e.target.value)}
          value={taskTitle}
        />
        <button onClick={() => submitTaskTitle()}>ADD</button>
      </div>
      {props.tasks.map((t) => (
        <ul>
          <li className="task">
            <input type="checkbox" checked={t.checked} />
            <p>{t.value}</p>
            <button onClick={() => props.removeTask(t.id)}>delete</button>
          </li>
        </ul>
      ))}
      <button
        onClick={() => props.changeFilter("all")}
        className={props.filter === "all" ? "btn-active" : ""}
      >
        All
      </button>
      <button
        onClick={() => props.changeFilter("active")}
        className={props.filter === "active" ? "btn-active" : ""}
      >
        Active
      </button>
      <button
        onClick={() => props.changeFilter("completed")}
        className={props.filter === "completed" ? "btn-active" : ""}
      >
        Completed
      </button>
    </>
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
