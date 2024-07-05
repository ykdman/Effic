import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const homeTargetWrapper = style({
  display: "flex",
  height: "auto",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  margin: `${vars.space.big2} 0`,
});
export const targetContent = style({
  display: "flex",
  alignItems: "center",
  paddingRight: vars.space.medium,
});

export const targetContentSpan = style({
  fontSize: vars.fontSize.T3,
  wordBreak: "break-word",
});
export const targetContentInput = style({
  fontSize: vars.fontSize.T3,
  border: `3px solid ${vars.color.black}`,
});

export const targetContentTextArea = style({
  fontSize: vars.fontSize.T2,
  resize: "none",
  width: "100%",
  height: "100%",
});

export const targetButtonArea = style({
  height: "100%",
  display: "flex",
  alignItems: "center",
});

export const targetEditOrConfirmButton = style({
  backgroundColor: "transparent",
  border: "none",
  width: vars.sizeRem.big2,
  fontSize: vars.fontSize.T2,
});

export const targetRemoveButton = style({
  backgroundColor: "transparent",
  border: "none",
  fontSize: vars.fontSize.T2,
});
