import React, { memo } from "react";
import { useTargetStore } from "../../../../store/targetStore";
import Target from "../Target/Target";
import { targetPannel, targetWrapper } from "./MyTarget.css";

const MyTarget: React.FC = () => {
  const targets = useTargetStore((state) => state.targets);

  return (
    <>
      <h3>나의 목표</h3>
      <div className={targetWrapper}>
        {targets &&
          targets.map((target) => (
            <Target key={target.id} id={target.id} content={target.content} />
          ))}
      </div>
    </>
  );
};

export default memo(MyTarget);
