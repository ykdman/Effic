import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const noteElementWrapper = style({
  width: "100%",
  height: "4rem",
  border: "1px solid black",
  marginTop: vars.space.medium,
  maxWidth: "600px",
  backgroundColor: vars.color.forest.light,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: vars.space.medium,
  paddingRight: vars.space.medium,
  color: vars.color.white,
});

export const buttonArea = style({
  display: "flex",
  justifyContent: "space-between",
});

export const infoButton = style({
  backgroundColor: vars.color.brown,
  color: vars.color.white,
});

export const removeButton = style({
  backgroundColor: vars.color.ground,
  color: vars.color.white,
});
