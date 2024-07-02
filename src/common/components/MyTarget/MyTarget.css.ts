import { style } from "@vanilla-extract/css";
import { vars } from "../../../style.css";

export const myTargetWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const targetTitle = style({
  fontSize: vars.fontSize.T3,
  fontWeight: 600,
});

export const targetsWrapper = style({
  margin: 0,
  paddingTop: vars.space.medium,
  paddingLeft: vars.space.medium,
});
