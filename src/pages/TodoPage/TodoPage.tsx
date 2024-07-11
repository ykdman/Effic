import React from "react";
import { todoPage, todoPageContent } from "./TodoPage.css";
import { TodoManage, TodoDisplay } from "../../feature/todo/ui";

const TodoPage = () => {
  return (
    <section className={todoPage}>
      <div className={todoPageContent}>
        <TodoManage />
        <TodoDisplay />
      </div>
    </section>
  );
};

export default TodoPage;
