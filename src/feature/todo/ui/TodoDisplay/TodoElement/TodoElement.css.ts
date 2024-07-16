import { style } from "@vanilla-extract/css";
import { vars } from "../../../../../style.css";

export const todoElementWrappar = style({
  listStyle: "none",
  width: "350px",
  minWidth: "max-content",
  margin: `${vars.space.big1} 0`,
  border: "1px solid black",
  padding: vars.space.medium,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const todoContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.small,
});
