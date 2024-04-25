"use client";
import * as React from "react";
import { Typography, colors } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TypeAnimation } from "react-type-animation";

import type { TypographyProps } from "@mui/material";

// const H1 = styled(Typography)<TypographyProps>(({ theme }) => ({
//   "&": {
//     overflow: "hidden",
//   },
//   "& span.typed-text": {
//     fontWeight: "normal",
//     color: colors.green[700],
//   },
//   "& span.cursor": {
//     display: "inline-block",
//     backgroundColor: "#ccc",
//     marginLeft: 0.1,
//     width: 3,
//     animation: "blink 1s infinite",
//   },
//   "& span.cursor.typing": {
//     animation: "none",
//   },
//   // "& .typed-text": {
//   //   "&:hover, &.Mui-focusVisible": {
//   //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
//   //   },
//   //   "&.Mui-active": {
//   //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
//   //   },
//   // },
// }));

const finnanceColor = colors.green[400];
const commercialColor = colors.yellow[400];
const marketingColor = colors.blue[400];
const operationalColor = colors.red[400];

export const H1Auto = () => {
  const [textColor, setTextColor] = React.useState<string>(finnanceColor);

  return (
    <Typography
      component="h1"
      variant="h3"
      sx={{
        fontWeight: "700",
        fontSize: { xs: 30, lg: 60 },
        mb: 3,
      }}
    >
      Controle do setor{" "}
      <span style={{ color: textColor }}>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            "financeiro",
            800,
            "",
            () => setTextColor(marketingColor),
            "marketing",
            800,
            "",
            () => setTextColor(commercialColor),
            "comercial",
            800,
            "",
            () => setTextColor(operationalColor),
            "operacional",
            800,
            "",
            () => setTextColor(finnanceColor),
          ]}
          repeat={Infinity}
        />
      </span>
    </Typography>
  );
};
