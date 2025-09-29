import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

export const SectionHero = () => {
  return (
    <Box
      sx={{
        background: "#333",
        color: "#fff",
        justifyContent: "center",
        justifyItems: "center",
        display: "flex",
        paddingTop: { xs: 8, lg: 25 },
        paddingBottom: { xs: 8, lg: 25 },
      }}
      component="section"
    >
      <Container
        maxWidth="xxl"
        sx={{
          justifyContent: "center",
          justifyItems: "center",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 5,
            fontSize: { xs: "2.5rem", lg: "3.75rem" },
          }}
        >
          Ferramentas para lojistas
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { lg: "1.25rem" },
            fontWeight: { lg: 500 },
            lineHeight: { lg: 1.6 },
            letterSpacing: { lg: "0.0075em" },
          }}
          component="p"
          variant="body1"
        >
          Fundada com a missão de impulsionar o sucesso de pequenas lojas, a
          Difusão Web entende que administrar uma loja vai muito além do ato de
          vender produtos.
          <br />É preciso uma gestão forte em todos os setores de uma loja,
          desde de marketing com a atração do público, passando pelo comercial
          para a conversão em vendas, consequentemente no operacional com a
          entrega dos produtos, até o setor financeiro com a gestão de caixa.
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { lg: "1.25rem" },
            fontWeight: { lg: 500 },
            lineHeight: { lg: 1.6 },
            letterSpacing: { lg: "0.0075em" },
          }}
          component="p"
          variant="body1"
        >
          Com essa visão, a Difusão Web desenvolveu uma solução para auxiliar
          lojistas em todas as áreas de sua loja.
        </Typography>
      </Container>
    </Box>
  );
};
