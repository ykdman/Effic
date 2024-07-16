import { style } from "@vanilla-extract/css";
import { vars } from "../../../../../style.css";

export const todoFormWrapper = style({
  marginTop: vars.space.big2,
  width: "100%",
  height: "100%",
  padding: vars.space.medium,
  display: "flex",
  flexDirection: "column",
});

export const todoContentArea = style({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  width: "100%",
  maxWidth: "400px",
  height: "5rem",
  gap: "5px",
});

export const todoInput = style({
  height: "100%",
  fontSize: vars.fontSize.T2,
});

export const optionSelectArea = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%",
  margin: `${vars.space.big1} auto`,
  maxWidth: "400px",
  height: "6rem",
});

export const datePickerArea = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  gap: "5px",
});

export const priorityPickerArea = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  gap: "5px",
});

export const buttonArea = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  margin: "0 auto",
});

export const saveButton = style({
  width: "6rem",
  backgroundColor: vars.color.primary,
  color: vars.color.black,
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: vars.color.main,
    color: vars.color.white,
  },
});

export const resetButton = style({
  width: "6rem",
  backgroundColor: vars.color.ground,
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: vars.color.black,
    color: vars.color.white,
  },
});
