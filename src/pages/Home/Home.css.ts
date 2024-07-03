import { style } from "@vanilla-extract/css";
import { vars } from "../../style.css";

export const homeSection = style({
  display: "grid",
  gridTemplateAreas: `
    ".  task  task  ."
    ".  target  promise ."    
  `,

  justifyItems: "center",
  // justifyContent: "center",
  // gridTemplateRows: "1fr 1fr",
  gridTemplateColumns: "300px 1fr 1fr 300px",
  gridAutoColumns: "minmax(150px, auto)",
  gridAutoRows: "minmax(200px, auto)",
  padding: vars.space.big1,
  minHeight: "max-content",
  height: "100vh",
  // gap: 10, // 간격 설정
  rowGap: 20,
  columnGap: 10,
});

export const targetArea = style({
  gridArea: "target",
  width: "100%", // 원하는 넓이로 설정
  // maxWidth: "600px", // 최대 넓이 설정
  height: "100%", // 동일한 높이 설정
  border: "1px solid black",
  backgroundColor: vars.color.white,
  borderRadius: 20,
  padding: `${vars.space.big2}`,
  boxShadow: vars.shadow.basic,
  minWidth: "400px",
});

export const taskArea = style({
  gridArea: "task",
  width: "100%", // 원하는 넓이로 설정

  // maxWidth: "1200px", // 최대 넓이 설정
  minWidth: "max-content",
  height: "100%", // 동일한 높이 설정
  border: "1px solid black",
  backgroundColor: vars.color.white,
  borderRadius: 20,
  padding: vars.space.big2,
  boxShadow: vars.shadow.basic,
  gridColumnStart: 2,
  gridColumnEnd: 4,
});

export const promiseArea = style({
  gridArea: "promise",
  width: "100%",
  // maxWidth: "600px",
  height: "auto",
  minWidth: "400px",
  border: `1px solid black`,
  backgroundColor: "#E7F0DC",
  borderRadius: 20,
  padding: vars.space.big2,
  boxShadow: vars.shadow.basic,
});
