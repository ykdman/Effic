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
  height: "650px",
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
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const noteModalTitleLabel = style({
  marginRight: vars.space.big2,
  fontWeight: 600,
});

export const noteModalTitle = style({
  fontSize: vars.fontSize.T1,
});

export const noteContentArea = style({
  display: "flex",
  flexDirection: "column",
  margin: `${vars.space.medium} 0`,
});

export const noteContentLabel = style({
  fontWeight: 600,
});

export const noteContentText = style({
  resize: "none",
  overflowY: "auto",
  fontSize: vars.fontSize.T1,
  fontWeight: 500,
  padding: `${vars.space.medium} ${vars.space.small}`,
});

export const footerArea = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const footerButtonArea = style({
  marginTop: vars.space.big2,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: vars.sizeRem.L1,
  height: vars.sizeRem.big2,
});

export const footerCloseButton = style({
  cursor: "pointer",
  border: "none",
  width: vars.sizeRem.big2,
  height: "100%",
  borderRadius: 10,
  backgroundColor: vars.color.ground,
  color: vars.color.black,
  transition: "opacity 0.2s, transform 0.2s",
  ":hover": {
    opacity: 0.9,
    transform: "scale(1.1)",
  },

  ":active": {
    opacity: 1,
    transform: "scale(1.05)",
  },
});

export const footerSaveButton = style({
  cursor: "pointer",
  width: vars.sizeRem.big2,
  height: "100%",
  border: "none",
  borderRadius: 10,
  color: vars.color.white,
  backgroundColor: vars.color.forest.light,
  transition: "opacity 0.2s, transform 0.2s",
  ":hover": {
    opacity: 0.9,
    transform: "scale(1.1)",
  },

  ":active": {
    opacity: 1,
    transform: "scale(1.05)",
  },
});
