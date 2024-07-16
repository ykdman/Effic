import React, { useEffect, useState } from "react";
import { ITodo } from "../store/todoStore";
import { fetchTodos } from "../share/api/fetchTodos";

const useGetTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos(false).then((data) => {
      setTodos(data!);
    });
  }, []);
  return todos;
};

export default useGetTodos;
