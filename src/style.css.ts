import { createGlobalTheme, style } from "@vanilla-extract/css";

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
    white: "#fff",
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
    homeCard: "30px",
  },
  sizeRem: {
    big1: "5rem",
    big2: "2.5rem",
    big3: "2rem",
    medium: "1.5rem",
    basic: "1rem",
    L1: "8rem",
    card: {
      width: "15rem",
      heigth: "15rem",
    },
  },
  buttons: {
    width: "2.5rem",
    height: "2rem",
  },
  shadow: {
    basic: "10px 10px 10px rgb(0,0,0, 0.3)",
    input: "3px 3px 3px rgb(0,0,0, 0.2)",
    card: "3px 3px 2px rgb(0,0,0, 0.3)",
  },
});

export const areaTitle = style({
  fontSize: vars.fontSize.T4,
  textAlign: "center",
  marginBottom: vars.space.medium,
  padding: `${vars.space.medium} ${vars.space.small}`,
});

export const button = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  border: "none",
  width: vars.buttons.width,
  height: vars.buttons.height,
  transition: "opacity 0.2s",
  borderRadius: 10,
  ":hover": {
    opacity: 0.6,
  },
  ":active": {
    opacity: 0.8,
  },
});
