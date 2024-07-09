import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const addButtonArea = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginBottom: vars.space.big1,
});

export const noteElementWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "100%",
});
