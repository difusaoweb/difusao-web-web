"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider } from "@mui/material/styles";
import { AppAppBar } from "@/components/AppAppBar";
import Hero from "@/components/Hero";
import LogoCollection from "@/components/LogoCollection";
import Highlights from "@/components/Highlights";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { theme } from "@/styles/theme";

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar mode="light" />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
