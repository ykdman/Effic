import { style } from "@vanilla-extract/css";
import { vars } from "../../style.css";

export const todoPageSection = style({
  width: "100%",
  height: "100%",
  padding: vars.space.medium,
});

export const todoPageContent = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  gap: vars.space.big1,
  padding: vars.space.big1,
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});
