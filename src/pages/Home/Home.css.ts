import { style } from "@vanilla-extract/css";
import { vars } from "../../style.css";

export const homeSection = style({
  display: "grid",
  gridTemplateAreas: `
    "task"
    "target"
    "note"
  `,
  gridTemplateColumns: "1fr",
  rowGap: "20px",
  padding: vars.space.big1,
  minHeight: "max-content",
  height: "100vh",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateAreas: `
        "task task"
        "target note"
      `,
      gridTemplateColumns: "1fr 1fr",
      columnGap: "20px",
    },
    "screen and (min-width: 1200px)": {
      gridTemplateAreas: `
        ". task task ."
        ". target note ."
      `,
      gridTemplateColumns: "300px 1fr 1fr 300px",
    },
  },
});

export const targetArea = style({
  gridArea: "target",
  width: "100%",
  height: "auto",
  border: "1px solid black",
  backgroundColor: vars.color.white,
  borderRadius: 20,
  overflow: "auto",
  padding: vars.space.big2,
  boxShadow: vars.shadow.basic,
  minWidth: "300px",
  minHeight: "450px",
  "@media": {
    "screen and (max-width: 768px)": {
      minWidth: "100%",
    },
  },
});
export const noteArea = style({
  gridArea: "note",
  minHeight: "450px",
  width: "100%",
  height: "auto",
  border: `1px solid black`,
  backgroundColor: "#E7F0DC",
  borderRadius: 20,
  padding: vars.space.big2,
  boxShadow: vars.shadow.basic,
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      minWidth: "100%",
    },
  },
});

export const taskArea = style({
  gridArea: "task",
  width: "100%",
  height: "auto",
  border: "1px solid black",
  backgroundColor: vars.color.white,
  borderRadius: 20,
  padding: vars.space.big2,
  boxShadow: vars.shadow.basic,
  maxWidth: "none",
});
