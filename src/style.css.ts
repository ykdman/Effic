import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    main: "#36BA98",
    sub: "#6B8076",
    ground: "#8B8E87",
    primary: "rgb(58, 193, 165);",
    dark: "#252928",
    brown: "#645955",
    forest: {
      basic: "#1d4239",
      sub: "#3F5A56",
      light: "#5A877E",
    },

    black: "#000",
  },
  textColor: {
    bright: "#F7F9F2",
  },
  font: {
    title: {
      family: `"Monofett", monospace`,
      weight: "400",
      style: "normal",
    },
    tiny: {
      family: `"Tiny5", sans-serif`,
      weight: "400",
      style: "normal",
    },
    anton: {
      family: `"Anton", sans-serif`,
    },
  },
  fontSize: {
    T1: "1rem",
    T2: "1.3rem",
    T3: "1.8rem",
    T4: "2rem",
    big1: "3rem",
    big2: "4rem",
  },
  space: {
    big1: "20px",
    big2: "15px",
    medium: "10px",
    small: "5px",
  },
});
