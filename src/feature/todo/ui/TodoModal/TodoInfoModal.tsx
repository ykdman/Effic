import React from "react";
import { useTodoStore } from "../../../../store/todoStore";

const TodoInfoModal: React.FC = () => {
  const todoModalIsOpen = useTodoStore((state) => state.todoModalIsOpen);
  const activeTodo = useTodoStore((state) => state.activeTodo);
  return todoModalIsOpen ? <div>{activeTodo.content}</div> : null;
};

export default TodoInfoModal;
