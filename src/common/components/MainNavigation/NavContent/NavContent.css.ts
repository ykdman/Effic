import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const navContentWrapper = style({
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  outline: "none",
});

export const navContent = style({
  color: vars.color.black,
  fontSize: vars.fontSize.T2,
  transition: "0.2s ease-in-out",
  width: "max-content",
  height: "100%",
  padding: vars.space.big1,
  borderRadius: 10,
  ":active": {
    color: vars.textColor.bright,
  },
  ":hover": {
    color: vars.textColor.bright,
    backgroundColor: vars.color.forest.light,
  },
});
