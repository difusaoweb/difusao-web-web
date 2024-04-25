"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    fluid: true;
  }
}

export let theme = createTheme(
  {
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
        fluid: 1,
      },
    },
  },
  {} satisfies ThemeOptions
);

theme = createTheme(
  theme,
  {
    palette: {
      mode: "light",
      primary: {
        light: "#000",
        main: "#000",
        dark: "#000",
        contrastText: "#fff",
      },
      secondary: {
        light: "#e84f3d",
        main: "#e84f3d",
        dark: "#e84f3d",
        contrastText: "#FFF",
      },
    },
    components: {
      // Name of the component
      MuiContainer: {
        styleOverrides: {
          // Name of the slot
          root: {
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              maxWidth: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              width: "100%",
              maxWidth: 540,
            },
            [theme.breakpoints.up("md")]: {
              width: "100%",
              maxWidth: 720,
            },
            [theme.breakpoints.up("lg")]: {
              width: "100%",
              maxWidth: 960,
            },
            [theme.breakpoints.up("xl")]: {
              width: "100%",
              maxWidth: 1140,
            },
            [theme.breakpoints.up("xxl")]: {
              width: "100%",
              maxWidth: 1320,
            },
          },
          maxWidthSm: {
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              maxWidth: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              width: "100%",
              maxWidth: 540,
            },
          },
          maxWidthMd: {
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              maxWidth: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              width: "100%",
              maxWidth: 540,
            },
            [theme.breakpoints.up("md")]: {
              width: "100%",
              maxWidth: 720,
            },
          },
          maxWidthLg: {
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              maxWidth: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              width: "100%",
              maxWidth: 540,
            },
            [theme.breakpoints.up("md")]: {
              width: "100%",
              maxWidth: 720,
            },
            [theme.breakpoints.up("lg")]: {
              width: "100%",
              maxWidth: 960,
            },
          },
          maxWidthXl: {
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              maxWidth: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              width: "100%",
              maxWidth: 540,
            },
            [theme.breakpoints.up("md")]: {
              width: "100%",
              maxWidth: 720,
            },
            [theme.breakpoints.up("lg")]: {
              width: "100%",
              maxWidth: 960,
            },
            [theme.breakpoints.up("xl")]: {
              width: "100%",
              maxWidth: 1140,
            },
          },
          maxWidthXxl: {
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              maxWidth: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              width: "100%",
              maxWidth: 540,
            },
            [theme.breakpoints.up("md")]: {
              width: "100%",
              maxWidth: 720,
            },
            [theme.breakpoints.up("lg")]: {
              width: "100%",
              maxWidth: 960,
            },
            [theme.breakpoints.up("xl")]: {
              width: "100%",
              maxWidth: 1140,
            },
            [theme.breakpoints.up("xxl")]: {
              width: "100%",
              maxWidth: 1320,
            },
          },
          maxWidthFluid: {
            width: "100% !important",
            maxWidth: "100vw !important",
          },
        },
      },
    },
  },
  {} satisfies ThemeOptions
);

// #333F48
// #e1523e
