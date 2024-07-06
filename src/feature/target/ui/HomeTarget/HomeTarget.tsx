import React, { ChangeEvent, FC, memo, useState } from "react";
import { FaCheck, FaPen, FaRegTrashAlt } from "react-icons/fa";

import { useTargetStore } from "../../../../store/targetStore";
import {
  homeTargetWrapper,
  targetButtonArea,
  targetContent,
  targetContentInput,
  targetContentSpan,
  targetContentTextArea,
  targetEditOrConfirmButton,
  targetRemoveButton,
} from "./HomeTarget.css";

type THomeTargetProps = {
  id: string;
  content: string;
};

const TargetContent: React.FC<{
  content: string;
  isEdit: boolean;
  editedTargetContent: string;
  toggleIsEdit: () => void;
  setEditedTargetContent: React.Dispatch<React.SetStateAction<string>>;
}> = ({
  content,
  isEdit,
  editedTargetContent: editTargetContent,
  setEditedTargetContent,
  toggleIsEdit,
}) => {
  const handleTargetChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditedTargetContent(e.target.value);
  };

  return isEdit ? (
    content.length > 14 ? (
      <textarea
        autoFocus
        className={targetContentTextArea}
        onChange={handleTargetChange}
        value={editTargetContent}
        onBlur={toggleIsEdit}
      />
    ) : (
      <input
        autoFocus
        className={targetContentInput}
        value={editTargetContent}
        onChange={handleTargetChange}
        onBlur={toggleIsEdit}
      />
    )
  ) : (
    <p className={targetContentSpan}>{content}</p>
  );
};

const TargetEditOrConfirmButton: React.FC<{
  isEdit: boolean;
  toggleIsEdit: () => void;
  updateTargetContent: () => void;
}> = ({ isEdit, toggleIsEdit, updateTargetContent }) => {
  const confirmHandler = () => {
    updateTargetContent();
    toggleIsEdit();
  };

  return isEdit ? (
    // 변경 확인 버튼

    <FaCheck onMouseDown={confirmHandler} />
  ) : (
    // 변경으로 전환 버튼

    <FaPen onClick={toggleIsEdit} />
  );
};

const HomeTarget: FC<THomeTargetProps> = ({ id, content }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editedTargetContent, setEditTargetContent] = useState<string>(content);
  const removeTarget = useTargetStore((state) => state.removeTarget);
  const updateTarget = useTargetStore((state) => state.updateTarget);

  const handleToggleIsEdit = () => {
    setIsEdit((prevState) => !prevState);
  };

  const handleUpdateTargetContent = () => {
    console.log(id, editedTargetContent);
    if (content !== editedTargetContent) {
      updateTarget({ id: id, content: editedTargetContent });
    } else {
      console.log("Test 실행");
    }
  };

  return (
    <div className={homeTargetWrapper}>
      <div className={targetContent}>
        <TargetContent
          isEdit={isEdit}
          content={content}
          editedTargetContent={editedTargetContent}
          setEditedTargetContent={setEditTargetContent}
          toggleIsEdit={handleToggleIsEdit}
        />
      </div>
      <div className={targetButtonArea}>
        <button className={targetEditOrConfirmButton}>
          <TargetEditOrConfirmButton
            isEdit={isEdit}
            toggleIsEdit={handleToggleIsEdit}
            updateTargetContent={handleUpdateTargetContent}
          />
        </button>
        <button className={targetRemoveButton} onClick={() => removeTarget(id)}>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default memo(HomeTarget);
