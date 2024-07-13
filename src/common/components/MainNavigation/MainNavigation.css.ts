import { style } from "@vanilla-extract/css";
import { vars } from "../../../style.css";

export const navigationWrapper = style({
  zIndex: 100,
  width: "100%",
  height: "76px",
  display: "flex",
  alignItems: "center",
  padding: vars.space.medium,
  justifyContent: "space-between",
  top: 0,
  backgroundColor: vars.color.primary,
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "0 0 10px 10px",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  marginRight: vars.space.big2,
});

export const title = style({
  fontFamily: vars.font.title.family,
  fontWeight: vars.font.title.weight,
  fontStyle: vars.font.title.style,
  fontSize: vars.fontSize.big1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const titleText = style({
  color: vars.color.forest.sub,
  textDecoration: "none",
  transition: "color 0.2s",
  ":hover": {
    color: vars.color.forest.light,
  },
});

export const navContents = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  flexGrow: 1,
  marginRight: vars.space.big2,
});

export const headerSub = style({
  fontFamily: vars.font.tiny.family,
  color: vars.color.forest.basic,
  fontSize: vars.fontSize.T2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: `0 ${vars.space.big1}`,
});
