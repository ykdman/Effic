import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const modalWrapper = style({
  zIndex: 999,
  border: "1px solid black",
  position: "absolute",
  width: "100vw",
  height: "100vh",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const modalBackDrop = style({
  zIndex: -10,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.2)",
  position: "relative",
});

export const noteModalContent = style({
  width: "500px",
  height: "500px",
  backgroundColor: "#fff",
  position: "absolute",
});

export const noteModalHeader = style({
  width: "100%",
  height: vars.sizeRem.big2,
  textAlign: "center",
  paddingTop: vars.space.medium,
  position: "relative",
});
