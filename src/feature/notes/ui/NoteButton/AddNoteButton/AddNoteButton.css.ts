import { style } from "@vanilla-extract/css";
import { vars } from "../../../../../style.css";

export const addButtonWrapper = style({
  width: vars.sizeRem.big1,
  height: vars.sizeRem.big2,
  fontSize: vars.fontSize.T4,
  outline: "none",
  border: `1px solid ${vars.color.white}`,
  borderRadius: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: vars.color.white,
  backgroundColor: vars.color.forest.light,
  cursor: "pointer",
  transition: "opacity 0.2s, transform 0.2s",
  ":hover": {
    opacity: 0.8,
    transform: "scale(1.1)",
  },
  ":active": {
    transform: "scale(0.97)",
  },
});

export const addButton = style({});
