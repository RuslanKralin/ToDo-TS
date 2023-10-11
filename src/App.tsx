import React, { useState } from "react";
import ToDoList from "./ToDoList";
import { v1 } from "uuid";

export type TaskType = {
  id: string;
  value: string;
  checked: boolean;
};
type TodoListType = {
  id: string;
  title: string;
  filter: FilterValues;
};
export type FilterValues = "all" | "active" | "completed";

function App() {
  let firstListId = v1();
  let secondListId = v1();
  let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
    {
      id: firstListId,
      title: "First List",
      filter: "completed",
    },
    {
      id: secondListId,
      title: "Second List",
      filter: "active",
    },
  ]);
  // const [tasks, setTasks] = useState([
  //   { id: v1(), value: "CSS", checked: true },
  //   { id: v1(), value: "JS", checked: true },
  //   { id: v1(), value: "REACT", checked: false },
  //   { id: v1(), value: "NODE JS", checked: false },
  // ]);

  const [allTasksObj, setAllTasksObj] = useState({
    [firstListId]: [
      { id: v1(), value: "CSS", checked: true },
      { id: v1(), value: "JS", checked: true },
      { id: v1(), value: "REACT", checked: false },
      { id: v1(), value: "NODE JS", checked: false },
    ],
    [secondListId]: [
      { id: v1(), value: "REACT", checked: false },
      { id: v1(), value: "NODE JS", checked: false },
    ],
  });

  function removeTask(id: string, listId: string) {
    let necessaryList = allTasksObj[listId];

    let filteredTasks = necessaryList.filter((t) => t.id !== id);
    console.log(filteredTasks);
    allTasksObj[listId] = filteredTasks;
    setAllTasksObj({ ...allTasksObj });
  }

  function changeFilter(value: FilterValues, listId: string) {
    let necessaryList = todoLists.find((tl) => tl.id === listId);
    if (necessaryList) {
      necessaryList.filter = value;
    }
    setTodoLists([...todoLists]);
  }
  // let tasksForToDoList = tasks;

  function addTask(title: string, listId: string) {
    let newTask = {
      id: v1(),
      value: title,
      checked: false,
    };
    let necessaryList = allTasksObj[listId];
    allTasksObj[listId] = [newTask, ...necessaryList];
    setAllTasksObj({ ...allTasksObj });
  }

  function changeStatus(taskId: string, listId: string) {
    let necessaryList = allTasksObj[listId];
    let resultTask = necessaryList.find((t) => t.id === taskId);
    if (resultTask) {
      resultTask.checked = !resultTask.checked;
    }
    setAllTasksObj({ ...allTasksObj });
  }

  return (
    <>
      {todoLists.map((tl) => {
        let tasksForToDoList = allTasksObj[tl.id]; // здесь остановился
        if (tl.filter === "active") {
          tasksForToDoList = tasksForToDoList.filter(
            (t: any) => t.checked === false
          );
        }

        if (tl.filter === "completed") {
          tasksForToDoList = tasksForToDoList.filter(
            (t: any) => t.checked === true
          );
        }
        return (
          <ToDoList
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={tasksForToDoList}
            removeTask={removeTask}
            changeFilter={changeFilter}
            filter={tl.filter}
            addTask={addTask}
            changeStatus={changeStatus}
          />
        );
      })}
    </>
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
