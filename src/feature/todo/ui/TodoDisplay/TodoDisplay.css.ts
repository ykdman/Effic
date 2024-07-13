import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const todoDisplayWrapepr = style({
  border: "1px solid black",
  maxWidth: "600px",
  width: "100%",
  height: "100%",
  minHeight: "max-content",
  maxHeight: "1000px",
  borderRadius: 15,
  backgroundColor: vars.color.white,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const title = style({
  marginTop: vars.space.big1,
  marginBottom: vars.space.big1,
});
