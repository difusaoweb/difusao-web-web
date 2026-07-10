import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

export const SectionHero = () => {
  return (
    <Box
      sx={{
        background: "#101010",
        color: "#fff",
        justifyContent: "center",
        justifyItems: "center",
        display: "flex",
        paddingTop: { xs: 4, lg: 8 },
        paddingBottom: { xs: 4, lg: 8 },
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
          component="h3"
          variant="h5"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1rem", lg: "1.3rem" },
            fontWeight: 600,
            textTransform: "uppercase",
            mb: 2.5,
          }}
          color="primary.main"
        >
          Difusão Web é tecnologia e conhecimento
        </Typography>
        <Typography
          component="h1"
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 5,
            fontSize: { xs: "2.5rem", lg: "4rem" },
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Tecnologia e conhecimento são vendas
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
