import React from "react";
import { todoContent, todoElementWrappar } from "./TodoElement.css";
import { FaRegTrashAlt } from "react-icons/fa";
import TodoElementWidget from "../TodoElementWidget/TodoElementWidget";

interface Props {
  id: string;
  date: Date;
  content: string;
  priority: number;
  done: boolean;
}

const TodoElement: React.FC<Props> = ({
  id,
  content,
  date,
  done,
  priority,
}) => {
  return (
    <li key={id} className={todoElementWrappar}>
      <div className={todoContent}>
        <h3>{content}</h3>
        <p>수행일 : {date.toLocaleString("ko").split("T")[0]}</p>
      </div>
      <TodoElementWidget todoId={id} />

      {/* <p>{done ? "Done" : "Not Done"}</p> */}
      {/* <p>{priority}</p> */}
    </li>
  );
};

export default TodoElement;
