import React, { FC, memo } from "react";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import {
  removeButton,
  targetContent,
  targetContentWrapper,
  targetWrapper,
  updateButton,
} from "./Target.css";

type TTargetProps = {
  id: string;
  content: string;
};

const Target: FC<TTargetProps> = ({ id, content }) => {
  return (
    <div className={targetWrapper}>
      <div className={targetContentWrapper}>
        <span className={targetContent}>{content}</span>
      </div>
      <FaPen className={updateButton} />
      <FaRegTrashAlt className={removeButton} />
    </div>
  );
};

export default memo(Target);
