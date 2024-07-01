import { style } from "@vanilla-extract/css";
import { vars } from "../../style.css";

export const homeWrapper = style({
  padding: vars.space.homeCard,
  height: "100%",
  width: "100%",
});

export const taskWrapper = style({
  minWidth: "max-content",

  display: "flex",
  justifyContent: "space-around",
});

export const taskInfo = style({
  border: `solid 1px ${vars.color.black}`,
  backgroundColor: vars.color.white,
  borderRadius: 20,
  padding: `${vars.space.big2} ${vars.space.big1}`,
  display: "flex",
  flexGrow: "1",
  flexDirection: "column",
  minWidth: "max-content",
  boxShadow: vars.shadow.basic,
  marginRight: vars.space.medium,
});

export const taskState = style({
  border: `solid 1px ${vars.color.black}`,
  backgroundColor: vars.color.white,
  borderRadius: 20,
  flexGrow: "2",
  padding: `${vars.space.big2} ${vars.space.big1}`,
  minWidth: "max-content",
  boxShadow: vars.shadow.basic,
});
