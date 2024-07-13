import React, { ChangeEvent, memo, useState } from "react";
import {
  buttonArea,
  datePickerArea,
  optionSelectArea,
  priorityPickerArea,
  todoContentArea,
  todoFormWrapper,
} from "./TodoAddForm.css";

import DatePicker from "react-datepicker";
import { MdAdd, MdClear } from "react-icons/md";
import { useTodoStore } from "../../../../../store/todoStore";
import { v4 } from "uuid";

const TodoAddForm: React.FC = () => {
  const [todoContent, setTodoContent] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedPriority, setSelectedPriority] = useState<number>(1);

  const addTodo = useTodoStore((state) => state.addTodo);

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleResetButton = () => {
    setTodoContent("");
    setSelectedDate(new Date());
  };

  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);
    setSelectedPriority(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const priority = selectedPriority;
    const content = todoContent;
    const id = v4();
    const date = selectedDate;
    const done = false;

    if (
      priority === 0 ||
      content.trim() === "" ||
      date.toString().trim() === ""
    ) {
      return;
    }

    addTodo({
      id,
      content,
      priority,
      date,
      done,
    });
  };

  return (
    <form className={todoFormWrapper} onSubmit={handleSubmit}>
      <div className={todoContentArea}>
        <label htmlFor="todo-content">할 일 입력</label>
        <input
          type="text"
          id="todo-content"
          onChange={handleContentChange}
          value={todoContent}
          required
          placeholder="할 일을 입력해주세요!"
        />
      </div>

      <div className={optionSelectArea}>
        <div className={datePickerArea}>
          <label htmlFor="todo-date">날짜 선택</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd(eee)"
            locale={"ko"}
            required
          />
        </div>
        <div className={priorityPickerArea}>
          <label htmlFor="todo-priority">중요도 선택</label>
          <select
            name="todo-priority"
            id="todo-priority"
            value={selectedPriority}
            onChange={handlePriorityChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>

      <p className={buttonArea}>
        <button type="submit">
          <MdAdd />
        </button>
        <button type="button" onClick={handleResetButton}>
          <MdClear />
        </button>
      </p>
    </form>
  );
};

export default memo(TodoAddForm);
