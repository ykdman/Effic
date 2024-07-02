import { useTargetStore } from "../../../store/targetStore";
import Target from "../Target/Target";
// import { v4 } from "uuid";
import { myTargetWrapper, targetsWrapper, targetTitle } from "./MyTarget.css";

const MyTarget = () => {
  const targets = useTargetStore((state) => state.targets);
  const addTaget = useTargetStore((state) => state.addTarget);
  return (
    <>
      <div className={myTargetWrapper}>
        <h3 className={targetTitle}>나의 목표</h3>
        <div className={targetsWrapper}>
          {targets &&
            targets.map((target) => (
              <Target key={target.id} id={target.id} content={target.content} />
            ))}
        </div>
      </div>
    </>
  );
};

export default MyTarget;
