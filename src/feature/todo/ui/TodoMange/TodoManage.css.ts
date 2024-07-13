import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const todoManageWrapper = style({
  border: "1px solid black",
  width: "100%",
  // height: "auto",
  minHeight: "500px",
  maxWidth: "600px",
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
