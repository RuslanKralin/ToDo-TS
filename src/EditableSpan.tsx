import React, { useState } from "react";

type EditablePropsType = {
  title: string;
  onChangeForParentTodoList: (newTitle: string) => void;
};

function EditableSpan(props: EditablePropsType) {
  let [title, setTitle] = useState("");
  const [edit, setEdit] = useState(false);

  let titleChangeHandler = (e: any) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  const activateEditMode = () => {
    setEdit(true);
    setTitle(props.title);
  };

  const activateViewMode = () => {
    setEdit(false);
    props.onChangeForParentTodoList(title);
  };

  return edit ? (
    <input
      value={title}
      onChange={titleChangeHandler}
      onBlur={activateViewMode}
      autoFocus
    />
  ) : (
    <span onClick={activateEditMode}>{props.title}</span>
  );
}

export default EditableSpan;
