import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const targetInputWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: `${vars.space.small}`,
  height: vars.sizeRem.big2,
  marginBottom: vars.space.medium,
});

export const inputArea = style({
  display: "flex",
  alignItems: "center",
  width: "70%",
  height: "100%",
  marginRight: vars.space.medium,
});

export const targetInput = style({
  width: "100%",
  height: vars.sizeRem.big2,
  padding: `0 ${vars.space.medium}`,
});

export const buttonArea = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

export const addButton = style({
  cursor: "pointer",
  fontSize: vars.fontSize.T3,
  color: vars.color.primary,
  transition: "opacity 0.2s",
  ":hover": {
    opacity: 0.8,
  },
});

export const clearButton = style({
  cursor: "pointer",
  fontSize: vars.fontSize.T3,
  borderRadius: 10,
  transition: "opacity 0.2s, background 0.2s",
  ":hover": {
    opacity: 0.8,
    backgroundColor: vars.color.ground,
  },
});
