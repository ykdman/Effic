import React from "react";
import ReactDOM from "react-dom";
import { modalPortal } from "./ModalPortal.css.ts";

type TModalPortalProps = {
  children: React.ReactNode;
};

const ModalPortal: React.FC<TModalPortalProps> = ({ children }) => {
  const el = document.getElementById("modal");

  if (!el) {
    console.error(
      'Modal root element not found. Please ensure an element with id "modal" exists in your HTML.'
    );
    return null; // 또는 fallback UI를 반환할 수 있습니다.
  }

  return ReactDOM.createPortal(
    <div className={modalPortal}>{children}</div>,
    el
  );
};

export default ModalPortal;
