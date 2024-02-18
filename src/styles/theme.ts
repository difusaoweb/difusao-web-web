"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        light: "#e84f3d",
        main: "#e84f3d",
        dark: "#e84f3d",
        contrastText: "#fff",
      },
      secondary: {
        light: "#000",
        main: "#000",
        dark: "#000",
        contrastText: "#FFF",
      },
    },
  },
  {} satisfies ThemeOptions
);

// #333F48
// #e1523e
