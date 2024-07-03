import React, { FC, memo } from "react";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";

import { useTargetStore } from "../../../../store/targetStore";

type TTargetProps = {
  id: string;
  content: string;
};

const Target: FC<TTargetProps> = ({ id, content }) => {
  const removeMyTarget = useTargetStore((state) => state.removeTarget);

  return (
    <div>
      <div>
        <span>{content}</span>
      </div>
      <FaPen />
      <FaRegTrashAlt onClick={() => removeMyTarget(id)} />
    </div>
  );
};

export default memo(Target);
