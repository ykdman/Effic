import { style } from "@vanilla-extract/css";

export const appContainer = style({
  width: "100vw",
  height: "100$",
  minHeight: "max-content",
});

export const contentWrapper = style({
  position: "absolute",
  top: "86px",
  overflow: "hidden",
  width: "100%",
  // maxWidth: "120rem",
  height: "100%",
  maxHeight: "max-content",
});
