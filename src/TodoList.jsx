import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({
  data,
  checked,
  onHandleCheckedTodo,
  onHandledeleteTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>

      <button className="delete-btn" onClick={() => onHandledeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoList;
