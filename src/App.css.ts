import { style } from "@vanilla-extract/css";

export const appContainer = style({
  width: "100vw",
  minHeight: "max-content",
});

export const contentWrapper = style({
  position: "absolute",
  top: "86px",
  width: "100vw",
  height: "100vh",
  maxHeight: "max-content",
});
