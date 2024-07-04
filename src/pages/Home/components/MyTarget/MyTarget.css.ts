import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const targetPannel = style({
  border: `1px solid ${vars.color.black}`,
});

export const targetWrapper = style({
  border: `1px solid ${vars.color.brown}`,
});

export const targetTitle = style({
  fontSize: vars.fontSize.T4,
  textAlign: "center",
  marginBottom: vars.space.medium,
  padding: `${vars.space.medium} ${vars.space.small}`,
});
