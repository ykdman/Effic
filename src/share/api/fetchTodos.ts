import { ITodo } from "../../store/todoStore";
import { httpClient } from "./http";

export const fetchTodos = async (isPost: boolean = false) => {
  if (!isPost) {
    const response = await httpClient.get<ITodo[]>("/todo");
    return response.data;
  }
};
