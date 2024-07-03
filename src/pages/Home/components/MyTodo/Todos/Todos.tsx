import React, { memo } from "react";
import { ITodo } from "../../../../../store/todoStore";

type TTodosProps = {
  todos: ITodo[];
};

const TodoElement: React.FC<ITodo> = ({
  id,
  content,
  date,
  done,
  priority,
}) => {
  return (
    <div>
      <input type="checkbox" checked={done} />
      <div>
        <span>{content}</span>
      </div>
      <div>종료 예정일 : {date}</div>
      <div>우선순위 : {priority}</div>
    </div>
  );
};

const Todos: React.FC<TTodosProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoElement
          key={todo.id}
          id={todo.id}
          content={todo.content}
          date={todo.date}
          done={todo.done}
          priority={todo.priority}
        />
      ))}
    </div>
  );
};

export default memo(Todos);
