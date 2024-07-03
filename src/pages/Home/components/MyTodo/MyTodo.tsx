import React, { memo } from "react";
import { useTodoStore } from "../../../../store/todoStore";

const MyTodo: React.FC = () => {
  const today = new Date().toLocaleDateString("ko", {});
  // const todos = useTodoStore((state) => state.todos.filter((todo) => todo.date ===  ));

  return <div>오늘 할 일</div>;
};

export default memo(MyTodo);
