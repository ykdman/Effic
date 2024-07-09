import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const targetTitle = style({
  fontSize: vars.fontSize.T4,
  textAlign: "center",
  marginBottom: vars.space.medium,
  padding: `${vars.space.medium} ${vars.space.small}`,
});

export const targetWrapper = style({
  padding: `${vars.space.big1}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  width: "100%",
  height: "100%",
});
