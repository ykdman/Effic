import { style } from "@vanilla-extract/css";

export const appContainer = style({
  width: "100vw",
  minHeight: "max-content",
});

export const contentWrapper = style({
  position: "absolute",
  top: "86px",
  width: "100%",
  // maxWidth: "120rem",
  height: "100%",
  maxHeight: "max-content",
});
