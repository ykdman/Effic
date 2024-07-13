import { style } from "@vanilla-extract/css";
import { vars } from "../../../../../style.css";

export const todoFormWrapper = style({
  width: "100%",
  height: "auto",
  border: "1px solid black",
  padding: vars.space.medium,
  display: "flex",
  flexDirection: "column",
});

export const todoContentArea = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "400px",
});
export const optionSelectArea = style({
  display: "flex",
  justifyContent: "space-center",
  alignItems: "center",
});

export const datePickerArea = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const priorityPickerArea = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const buttonArea = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
});
