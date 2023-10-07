import React, { useState } from "react";
import ToDoList from "./ToDoList";
import { v1 } from "uuid";

export type TaskType = {
  id: string;
  value: string;
  checked: boolean;
};
type toDoList = {
  id: string;
  title: string;
  filterValue: FilterValues;
};
export type FilterValues = "all" | "active" | "completed";

function App() {
  const [tasks, setTasks] = useState([
    { id: v1(), value: "CSS", checked: true },
    { id: v1(), value: "JS", checked: true },
    { id: v1(), value: "REACT", checked: false },
    { id: v1(), value: "NODE JS", checked: false },
  ]);

  // const [filter, setFilter] = useState<FilterValues>("all");

  function removeTask(id: string, listId: string) {
    let list = toDoLists.find((tl) => tl.id === listId);
    if (list) {
      // console.log(list);
      let filteredTasks = tasks.filter((t) => t.id !== id);

      // setTasks(filteredTasks);
      setToDoLists([...toDoLists]);
    }
  }

  function changeFilter(value: FilterValues, listId: string) {
    let toDoList = toDoLists.find((tl) => tl.id === listId);
    if (toDoList) {
      toDoList.filterValue = value;
      setToDoLists([...toDoLists]);
    }
  }
  let tasksForToDoList = tasks;
  function addTask(title: string) {
    let newTask = {
      id: v1(),
      value: title,
      checked: false,
    };
    tasksForToDoList = [newTask, ...tasks];
    setTasks(tasksForToDoList);
  }

  function changeStatus(taskId: string) {
    let resultTask = tasks.find((t) => t.id === taskId);
    if (resultTask) {
      resultTask.checked = !resultTask.checked;
    }
    setTasks([...tasks]);
  }

  const [toDoLists, setToDoLists] = useState<Array<toDoList>>([
    {
      id: v1(),
      title: "What to learn",
      filterValue: "active",
    },
    {
      id: v1(),
      title: "What to read",
      filterValue: "all",
    },
    {
      id: v1(),
      title: "What to whach",
      filterValue: "completed",
    },
  ]);

  return (
    <div className="conteiner">
      {toDoLists.map((tl) => {
        let tasksForToDoList = tasks;
        if (tl.filterValue === "active") {
          tasksForToDoList = tasks.filter((t) => t.checked === false);
        }

        if (tl.filterValue === "completed") {
          tasksForToDoList = tasks.filter((t) => t.checked === true);
        }

        return (
          <ToDoList
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={tasksForToDoList}
            removeTask={removeTask}
            changeFilter={changeFilter}
            filterValue={tl.filterValue}
            addTask={addTask}
            changeStatus={changeStatus}
          />
        );
      })}
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// import "./index.css";
// import ToDoList, { TasksType } from "./ToDoList";
// import { v1 } from "uuid";

// export type typeValuesFilter = "all" | "complited" | "active";
// export type ToDoListType = {
//   id: string;
//   title: string;
//   filter: typeValuesFilter;
// };
// function App() {
//   const [tasks, setTasks] = useState<Array<TasksType>>([
//     { id: v1(), title: "js", isDone: true },
//     { id: v1(), title: "TS", isDone: false },
//     { id: v1(), title: "Redax", isDone: false },
//     { id: v1(), title: "React", isDone: false },
//   ]);

//   function changeFilter(value: typeValuesFilter, listId: string) {
//     let toDoList = lists.find((tl) => tl.id === listId);
//     if (toDoList) {
//       toDoList.filter = value;
//       setLists([...lists]);
//     }
//   }

//   function removeTask(id: string, listId: string) {
//     let result = tasks.filter((t) => t.id !== id);
//     setTasks(result);
//     console.log(result);
//   }

//   function addTask(title: string) {
//     let newTask = {
//       id: v1(),
//       title: title,
//       isDone: false,
//     };
//     let newTasks = [newTask, ...tasks];
//     setTasks(newTasks);
//   }

//   function changeStatus(TaskId: string, isDone: boolean) {
//     let resaltTask = tasks.find((t) => t.id === TaskId);
//     if (resaltTask) {
//       resaltTask.isDone = !resaltTask.isDone;
//     }
//     console.log(resaltTask);
//     setTasks([...tasks]);
//   }

//   let [lists, setLists] = useState<Array<ToDoListType>>([
//     {
//       id: v1(),
//       title: "What to buy",
//       filter: "active",
//     },
//     {
//       id: v1(),
//       title: "Second",
//       filter: "all",
//     },
//   ]);

//   return (
//     <div className="conteiner">
//       {lists.map((tl) => {
//         let tasksForToDoList = tasks;
//         if (tl.filter === "active") {
//           tasksForToDoList = tasks.filter((t) => t.isDone === false);
//         } else if (tl.filter === "complited") {
//           tasksForToDoList = tasks.filter((t) => t.isDone === true);
//         }

//         return (
//           <ToDoList
//             key={tl.id}
//             id={tl.id}
//             title={tl.title}
//             tasks={tasksForToDoList}
//             removeTask={removeTask}
//             changeFilter={changeFilter}
//             addTask={addTask}
//             changeStatus={changeStatus}
//             filter={tl.filter}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default App;
