import { style } from "@vanilla-extract/css";

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
  padding: "10px 10px",
  width: "100%",
  height: `20rem`,
});
