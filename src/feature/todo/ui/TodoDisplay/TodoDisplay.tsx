import React, { memo } from "react";
import { ITodo } from "../../../../store/todoStore";
import { title, todoDisplayWrapepr } from "./TodoDisplay.css";

interface Props {
  todos: ITodo[];
}

const TodoDisplay: React.FC<Props> = ({ todos }) => {
  return (
    <section className={todoDisplayWrapepr}>
      <p className={title}>
        <h2>Todos</h2>
      </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </section>
  );
};

export default memo(TodoDisplay);
