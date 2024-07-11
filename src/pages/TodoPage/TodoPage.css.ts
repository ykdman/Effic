import { style } from "@vanilla-extract/css";
import { vars } from "../../style.css";

export const todoPage = style({
  width: "100%",
  height: "100%",
  padding: vars.space.medium,
});

export const todoPageContent = style({
  width: "100%",
  height: "100%",
  border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
