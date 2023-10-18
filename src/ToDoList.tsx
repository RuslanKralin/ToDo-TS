import React from "react";
import { FilterValues, TaskType } from "./App";
import "./index.css";
import ItemForm from "./ItemForm";
import EditableSpan from "./EditableSpan";

type PropsType = {
  id: string;
  title: string;
  tasks: Array<TaskType>;
  removeTask: (id: string, listId: string) => void;
  changeFilter: (value: FilterValues, listId: string) => void;
  filterValue: FilterValues;
  addTask: (title: string, listId: string) => void;
  changeStatus: (id: string, listId: string) => void;
  changeTaskTitle: (id: string, newTitle: string, listId: string) => void;
  changeListTitle: (id: string, newTitle: string) => void;
  deleteList: (listId: string) => void;
};

function ToDoList(props: PropsType) {
  function addTask(title: string) {
    props.addTask(title, props.id);
  }
  const changeTitleHandler = (newValue: string) =>
    props.changeListTitle(props.id, newValue);

  return (
    <div className="conteiner">
      <h2 className="title">
        <EditableSpan
          title={props.title}
          onChangeForParentTodoList={changeTitleHandler}
        />

        <button onClick={() => props.deleteList(props.id)}>delete list</button>
      </h2>
      <ItemForm addItem={addTask} />

      <ul className="tasks-list">
        {props.tasks.map((t) => {
          const changeTitleHandler = (newValue: string) =>
            props.changeTaskTitle(t.id, newValue, props.id);
          return (
            <li className={t.checked === true ? "task-done" : ""} key={t.id}>
              <input
                type="checkbox"
                checked={t.checked}
                onClick={() => props.changeStatus(t.id, props.id)}
              />
              <EditableSpan
                title={t.value}
                onChangeForParentTodoList={changeTitleHandler}
              />
              <button onClick={() => props.removeTask(t.id, props.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <div className="btn-group">
        <button
          onClick={() => props.changeFilter("all", props.id)}
          className={props.filterValue === "all" ? "btn-active" : ""}
        >
          All
        </button>
        <button
          onClick={() => props.changeFilter("active", props.id)}
          className={props.filterValue === "active" ? "btn-active" : ""}
        >
          Active
        </button>
        <button
          onClick={() => props.changeFilter("completed", props.id)}
          className={props.filterValue === "completed" ? "btn-active" : ""}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default ToDoList;
