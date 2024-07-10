import React from "react";
import { ITodo } from "../../../../store/todoStore";

type TTodoTaskProps = {
  todo: ITodo;
};

const TodoTask: React.FC<TTodoTaskProps> = ({ todo }) => {
  const date = new Date(todo.date).toLocaleDateString("ko");
  return (
    <>
      <div>{todo.content}</div>
      {/* <div>{todo.date}</div> */}
      <div>{date}</div>
      <div>{todo.done}</div>
      <div>{todo.priority}</div>
    </>
  );
};

export default TodoTask;
