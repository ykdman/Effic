import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const myTodoWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  height: "100%",
});

export const todoCardWrapper = style({
  border: "1px solid black",
  padding: vars.space.big2,
  width: "75rem",
  height: `20rem`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
});
