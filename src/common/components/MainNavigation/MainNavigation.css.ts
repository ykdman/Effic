import { style } from "@vanilla-extract/css";
import { vars } from "../../../style.css";

export const navigationWrapper = style({
  width: "100%",
  height: "76px",
  minHeight: "max-content",
  display: "flex",
  alignItems: "center",
  padding: vars.space.medium,
  justifyContent: "space-between",

  position: "fixed",
  backgroundColor: vars.color.primary,
  boxShadow: "10px 10px 10px rgb(0, 0, 0, 0.3)",
  borderRadius: 5,
});

export const header = style({
  marginLeft: vars.space.big2,
  marginRight: vars.space.big2,
  flexGrow: "1",
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
  transition: "color .2s",
  ":hover": {
    color: vars.color.forest.light,
  },
});

export const navContents = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  minWidth: "max-content",
  width: "300px",
  flexGrow: "1.5",
});

export const headerSub = style({
  fontFamily: vars.font.tiny.family,
  color: vars.color.forest.basic,
  fontSize: vars.fontSize.T2,
  flexGrow: "1",
  padding: `0 ${vars.space.big1}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
