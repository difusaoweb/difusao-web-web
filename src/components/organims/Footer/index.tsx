import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        justifyItems: "center",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        paddingTop: 1,
        paddingBottom: 1,
        backgroundColor: "#f5f5f7",
      }}
      component="footer"
    >
      <Container
        maxWidth="xxl"
        sx={{
          justifyContent: "center",
          justifyItems: "center",
          display: "flex",
          alignContent: "center",
          alignItems: "start",
          flexDirection: "column",
        }}
        component="section"
      >
        <Typography
          component="small"
          variant="body2"
          color="rgba(0, 0, 0, 0.56)"
        >
          Copyright © 2024 Difusão Web. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};
