import { style } from "@vanilla-extract/css";

export const swiperWrapper = style({
  width: "100%",
  ":hover": {
    cursor: "grab",
  },
  ":active": {
    cursor: "grabbing",
  },
});
