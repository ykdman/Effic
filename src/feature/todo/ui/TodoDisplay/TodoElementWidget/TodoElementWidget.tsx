import React, { useState } from "react";
import { FaRegCheckCircle, FaRegTrashAlt } from "react-icons/fa";
import {
  todoCheckboxOff,
  todoCheckboxOn,
  todoRemoveButton,
  todoWidgetWrapper,
} from "./TodoElementWidget.css";
import { GiCircle } from "react-icons/gi";
interface Props {
  todoId: string;
}

const TodoElementWidget: React.FC<Props> = ({ todoId }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggleCheck = () => {
    setIsChecked((prevCheck) => !prevCheck);
  };

  const checkEl = isChecked ? (
    <FaRegCheckCircle className={todoCheckboxOn} onClick={handleToggleCheck} />
  ) : (
    <GiCircle className={todoCheckboxOff} onClick={handleToggleCheck} />
  );

  return (
    <p className={todoWidgetWrapper}>
      {checkEl}
      <button className={todoRemoveButton}>
        <FaRegTrashAlt />
      </button>
    </p>
  );
};

export default TodoElementWidget;
