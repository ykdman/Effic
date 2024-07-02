import { style } from "@vanilla-extract/css";
import { vars } from "../../../style.css";

// export const targetWrapper = style({
//   display: "flex",
//   justifyContent: "space-around",
//   minWidth: "max-content",
//   alignItems: "center",
//   width: "100%",
// });
export const targetWrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 0.2fr 0.2fr",
  alignItems: "center",
  justifyItems: "flex-start",
  gridAutoColumns: "repeat(100px, auto)",
  minWidth: "max-content",
  width: "100%",
});

export const targetContentWrapper = style({
  display: "flex",
  justifyContent: "flex-start",
  minWidth: "max-content",
  padding: `${vars.space.medium} 0`,
});

export const targetContent = style({
  display: "block",
  fontSize: vars.fontSize.T2,
  wordBreak: "break-word",
});

export const updateButton = style({
  cursor: "pointer",
  fontSize: vars.fontSize.T2,
});

export const removeButton = style({
  cursor: "pointer",
  fontSize: vars.fontSize.T2,
});
