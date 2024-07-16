import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../../../../style.css";

const fillFromBottom = keyframes({
  from: {
    transform: "translateY(10px)",
    opacity: 0,
  },
  to: {
    transform: "translateY(0)",
    opacity: 1,
  },
});

const fillFromTop = keyframes({
  from: {
    transform: "translateY(-10px)",
    opacity: 0,
  },
  to: {
    transform: "translateY(0)",
    opacity: 1,
  },
});

export const todoWidgetWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.medium,
});

export const todoCheckboxOff = style({
  cursor: "pointer",
  fontSize: vars.fontSize.T2,
  border: "none",
  outline: "none",
  animation: `${fillFromTop} 0.3s ease-out`,
});

export const todoCheckboxOn = style({
  cursor: "pointer",
  fontSize: vars.fontSize.T2,
  border: "none",
  outline: "none",
  color: vars.color.main,
  animation: `${fillFromBottom} 0.3s ease-out`,
});

export const todoRemoveButton = style({
  display: "flex",
  alignItems: "center",
  border: "none",
  fontSize: vars.fontSize.T2,
  outline: "none",
  cursor: "pointer",
  color: vars.color.black,
  backgroundColor: "transparent",
  borderRadius: 5,
  transition: "all 0.2s",
  ":hover": {
    color: vars.color.ground,
  },
  ":active": {
    color: vars.color.dark,
    backgroundColor: vars.color.ground,
  },
});
