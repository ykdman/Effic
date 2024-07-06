import React, { memo } from "react";
import { useTargetStore } from "../../../../store/targetStore";
import HomeTarget from "../../../../feature/target/ui/HomeTarget/HomeTarget.tsx";
import { targetTitle, targetWrapper } from "./MyTarget.css";
import { TargetInput } from "../../../../feature/target/index.ts";
import { areaTitle } from "../../../../style.css.ts";

const MyTarget: React.FC = () => {
  const targets = useTargetStore((state) => state.targets);

  return (
    <>
      <h3 className={areaTitle}>나의 목표</h3>
      <TargetInput />
      <div className={targetWrapper}>
        {targets &&
          targets.map((target) => (
            <HomeTarget
              key={target.id}
              id={target.id}
              content={target.content}
            />
          ))}
      </div>
    </>
  );
};

export default memo(MyTarget);
