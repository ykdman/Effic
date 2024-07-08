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
  backgroundColor: "rgba(0,0,0,0.6)",
  position: "relative",
});

export const noteModalContent = style({
  width: "720px",
  height: "600px",
  backgroundColor: "#fff",
  position: "absolute",
  borderRadius: 15,
  padding: vars.space.big2,
  boxShadow: vars.shadow.basic,
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
});

export const closeButtonArea = style({
  position: "absolute",
  top: 0,
  right: vars.space.small,
  cursor: "pointer",
  width: vars.sizeRem.big2,
  height: vars.sizeRem.big2,
});

export const closeButton = style({
  width: "100%",
  height: "100%",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
  ":active": {
    opacity: 0.9,
  },
  fontSize: vars.fontSize.T2,
});

export const noteModalHeader = style({
  width: "100%",
  height: vars.sizeRem.big2,
  textAlign: "center",
  paddingTop: vars.space.medium,
  position: "relative",
  marginBottom: vars.space.big2,
  fontSize: vars.fontSize.T2,
});

export const noteModalTitleArea = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
});

export const noteModalTitleLabel = style({
  marginRight: vars.space.big2,
});

export const noteModalTitle = style({});

export const noteContentArea = style({});

export const footerArea = style({});

export const footerButtonArea = style({});
