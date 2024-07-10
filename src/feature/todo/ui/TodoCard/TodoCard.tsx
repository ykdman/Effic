import React from "react";
import {
  contentArea,
  firstColors,
  secondColors,
  thirdColors,
  todoCardContent,
} from "./TodoCard.css";
import { useTodoStore } from "../../../../store/todoStore";

type TTodoCardProps = {
  id: string;
  content: string;
  priority: number;
};

const TodoCard: React.FC<TTodoCardProps> = ({ id, content, priority }) => {
  const setActiveTodo = useTodoStore((state) => state.setActiveTodo);

  return (
    <div
      className={`${todoCardContent} ${
        priority === 1
          ? firstColors
          : priority === 2
          ? secondColors
          : thirdColors
      }`}
      onClick={() => setActiveTodo(id)}
    >
      <div className={contentArea}>{content}</div>
    </div>
  );
};

export default TodoCard;
