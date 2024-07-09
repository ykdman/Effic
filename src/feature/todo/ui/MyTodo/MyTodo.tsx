import React, { memo } from "react";
import Todos from "./Todos/Todos";
import { areaTitle } from "../../../../style.css";
import { myTodoWrapper, todoCardWrapper } from "./MyTodo.css";
import TodoCard from "../TodoCard/TodoCard";

const MyTodo: React.FC = () => {
  return (
    <div className={myTodoWrapper}>
      <h3 className={areaTitle}>나의 할 일</h3>
      <div className={todoCardWrapper}>
        <TodoCard />
      </div>
    </div>
  );
};

export default memo(MyTodo);
