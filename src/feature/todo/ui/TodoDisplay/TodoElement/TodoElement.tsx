import React from "react";

interface Props {
  id: string;
  date: Date;
  content: string;
  priority: number;
  done: boolean;
}

const TodoElement: React.FC<Props> = ({
  id,
  content,
  date,
  done,
  priority,
}) => {
  return (
    <li>
      <h3>{content}</h3>
      <p>{date.toDateString()}</p>
      <p>{done ? "Done" : "Not Done"}</p>
      <p>{priority}</p>
    </li>
  );
};

export default TodoElement;
