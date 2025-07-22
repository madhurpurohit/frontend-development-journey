import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  checked,
  onHandleDeleteButton,
  onHandleCheckButton,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckButton(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteButton(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
