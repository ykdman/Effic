import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const myTodoWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  height: "100%",
  padding: vars.space.big2,
  // boxShadow: vars.shadow.basic,
});

export const todoCardWrapper = style({
  // border: "1px solid black",
  padding: vars.space.big2,
  width: "100%",
  height: "auto",
  maxWidth: "900px",
  // minWidth: "max-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
});
