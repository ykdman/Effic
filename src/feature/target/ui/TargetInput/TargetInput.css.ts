import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const targetInputWrapper = style({
  // border: "1px solid black",
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
  justifyContent: "center",
  width: "100%",
  height: "100%",
  // marginRight: vars.space.medium,
  fontSize: vars.fontSize.T3,
  position: "relative",
});

export const targetInput = style({
  width: "100%",
  height: vars.sizeRem.big2,
  // padding: `0 ${vars.space.medium}`,
  borderRadius: 15,
  outline: "none",
  border: "1px solid black",
  boxShadow: vars.shadow.input,
  zIndex: 1,
  paddingLeft: vars.space.medium,
  paddingRight: `80px`,
});

export const buttonArea = style({
  width: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  zIndex: 2,
  position: "absolute",
  right: 0,
  paddingRight: vars.space.medium,
});

export const addButton = style({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "transparent",
  cursor: "pointer",
  border: "none",
  fontSize: vars.fontSize.T3,
  outline: "none",
  color: vars.color.primary,
  transition: "opacity 0.2s, transform 0.2s",
  marginRight: vars.space.small,
  ":hover": {
    opacity: 0.8,
    transform: "scale(1.1)",
  },
  ":active": {
    transform: "scale(0.97)",
  },
});

export const clearButton = style({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  outline: "none",
  fontSize: vars.fontSize.T3,
  borderRadius: 10,
  transition: "opacity 0.2s, background 0.2s, transform 0.2s",
  ":hover": {
    opacity: 0.8,
    backgroundColor: vars.color.ground,
    color: vars.color.white,
    transform: "scale(1.1)",
  },
  ":active": {
    transform: "scale(0.97)",
  },
});
