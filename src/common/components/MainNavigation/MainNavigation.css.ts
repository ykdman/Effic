import { style } from "@vanilla-extract/css";
import { vars } from "../../../style.css";

export const title = style({
  color: vars.textColor.bright,
  border: `solid 1px ${vars.color.main}`,
  backgroundColor: vars.color.main,
});
