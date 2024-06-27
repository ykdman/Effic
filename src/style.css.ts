import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    main: "#36BA98",
    sub: "#6B8076",
    ground: "#8B8E87",
    primary: "rgb(58, 193, 165);",
    dark: "#252928",
    brown: "#645955",
  },
  textColor: {
    bright: "#8B8E87",
  },
});
