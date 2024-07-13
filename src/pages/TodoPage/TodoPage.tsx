import React from "react";
import { todoPageSection, todoPageContent } from "./TodoPage.css";
import { TodoManage, TodoDisplay } from "../../feature/todo/ui";
import { useTodoStore } from "../../store/todoStore";

const TodoPage = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <section className={todoPageSection}>
      <div className={todoPageContent}>
        <TodoManage />
        <TodoDisplay todos={todos} />
      </div>
    </section>
  );
};

export default TodoPage;
