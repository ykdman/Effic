import { style } from "@vanilla-extract/css";
import { vars } from "../../../../style.css";

export const noteInfoModalDialog = style({
  display: "flex",
  justifyContent: "center",
  padding: 0,
  margin: 0,
  alignItems: "center",
  "::backdrop": {
    background: "#ddd",
  },
});

export const noteInfoModalWrapper = style({
  display: "flex",
  alignItems: "center",
  width: vars.sizeRem.big2,
  justifyContent: "center",
});
