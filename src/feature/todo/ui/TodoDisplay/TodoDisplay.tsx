import React, { memo } from "react";
import { ITodo } from "../../../../store/todoStore";
import { title, todoDisplayWrapepr } from "./TodoDisplay.css";
import TodoElement from "./TodoElement/TodoElement";

interface Props {
  todos: ITodo[];
}

const TodoDisplay: React.FC<Props> = ({ todos }) => {
  return (
    <section className={todoDisplayWrapepr}>
      <h2 className={title}>Todos</h2>

      <ul>
        {todos.map((todo) => (
          <TodoElement
            key={todo.id}
            id={todo.id}
            date={todo.date}
            content={todo.content}
            done={todo.done}
            priority={todo.priority}
          />
        ))}
      </ul>
    </section>
  );
};

export default memo(TodoDisplay);
