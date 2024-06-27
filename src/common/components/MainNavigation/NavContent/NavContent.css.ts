import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const navContentWrapper = style({
  textDecoration: "none",
});

export const navContent = style({
  color: vars.color.primary,
  transition: "0.6",
  ":active": {
    color: vars.textColor.bright,
  },
  ":hover": {
    color: vars.textColor.bright,
  },
});
