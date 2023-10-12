import React, { useState } from "react";

export type ItemFormType = {
  addItem: (title: string) => void;
  // id: string;
};

function ItemForm(props: ItemFormType) {
  const [taskTitle, setTaskTitle] = useState("");
  const [error, setError] = useState("");

  function submitTaskTitle() {
    if (
      taskTitle &&
      taskTitle.trim().length !== 0 &&
      taskTitle.trim().length < 20
    ) {
      const trimedTitle = taskTitle.trim();
      setError("");
      props.addItem(trimedTitle);
      // props.changeFilter("active");
      setTaskTitle("");
    } else if (taskTitle.trim().length === 0) {
      setError("пустое поле");
    } else if (taskTitle.trim().length > 5) {
      setError("больше 20");
    }
  }
  return (
    <>
      <div className="input">
        <input
          type="text"
          onChange={(e) => setTaskTitle(e.target.value)}
          value={taskTitle}
          onKeyDown={(e) => (e.key === "Enter" ? submitTaskTitle() : null)}
        />
        <button onClick={() => submitTaskTitle()}>ADD</button>
      </div>
      {error && <div className="error">{error}</div>}
    </>
  );
}

export default ItemForm;
