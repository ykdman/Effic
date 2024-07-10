import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const todoCardContent = style({
  // display: "block",
  border: "1px solid black",
  width: vars.sizeRem.card.width,
  height: vars.sizeRem.card.heigth,
  marginBottom: "2rem",
  borderRadius: 15,
  padding: vars.space.medium,
  boxShadow: vars.shadow.card,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.2s, transform 0.2s",
  ":hover": {
    opacity: 0.8,
    cursor: "pointer",
  },
  ":active": {
    opacity: 0.8,
    transform: "scale(0.95)",
  },
});

export const contentArea = style({
  fontFamily: "monospace",
  fontSize: vars.fontSize.T2,
  fontWeight: 600,
});

export const firstColors = style({
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});

export const secondColors = style({
  backgroundColor: vars.color.forest.light,
  color: vars.color.white,
});

export const thirdColors = style({
  backgroundColor: vars.color.forest.sub,
  color: vars.color.white,
});
