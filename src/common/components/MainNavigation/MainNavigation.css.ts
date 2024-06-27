import { style } from "@vanilla-extract/css";
import { vars } from "../../../style.css";

export const navigationWrapper = style({
  width: "100%",
  height: "76px",
  minHeight: "max-content",
  display: "flex",
  alignItems: "center",
  padding: vars.space.medium,
  justifyContent: "space-around",
  position: "fixed",
});

export const header = style({
  marginLeft: vars.space.big2,
  marginRight: vars.space.big2,
});
export const title = style({
  fontFamily: vars.font.title.family,
  fontWeight: vars.font.title.weight,
  fontStyle: vars.font.title.style,
  color: vars.color.primary,
  fontSize: vars.fontSize.big1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const navContents = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  minWidth: "max-content",
  width: "300px",
});

export const headerSub = style({
  fontFamily: vars.font.tiny.family,
  color: vars.color.forest,
  fontSize: vars.fontSize.T2,
});
