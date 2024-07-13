import { style } from "@vanilla-extract/css";
import { vars } from "../../../../../style.css";

export const swiperWrapper = style({
  border: "1px solid black",
  padding: `${vars.space.big2} ${vars.space.big2}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  ":hover": {
    cursor: "grab",
  },
  ":active": {
    cursor: "grabbing",
  },
});
