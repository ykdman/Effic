import React, { FC } from "react";
import { ITodo } from "../../../store";

type TTodoTaskProps = {
  todo: ITodo;
};

const TodoTask: FC<TTodoTaskProps> = ({ todo }) => {
  return (
    <>
      <div>{todo.name}</div>
      <div>{todo.date}</div>
      <div>{todo.done}</div>
      <div>{todo.priority}</div>
    </>
  );
};

export default TodoTask;
